const Router = require('express')
const Role = require('../models/modelRole')
const User = require('../models/modelUser')
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
const { check } = require('express-validator');
const {secret} = require('../config');
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')
const uploadMiddleware = require('../middleware/uploadMiddleware')
const generateAccessToken = (user) => {// функция для генерации токена
    const payload = {
        user
    }
    return jwt.sign(payload,secret,{expiresIn:"24h"})
} 

router.post('/register', [
        check('name').notEmpty().withMessage('Имя пользователя не должно быть пустым'),
        check('password').isLength({min:4,max:10}).withMessage('Пароль должен быть больше 4 и меньше 10 символов')
    ],
    async(req, res) => {//router для регистрации
    try {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });         
        }
        //водные данные 
        const {name,email,password} = req.body;

        //проверка на совпадение пользователей
        const candidate = await User.findOne({name})

        if(candidate){//если совпадение найдено
            return res.status(400).json({message:"Пользователь с таким именем уже существует"})//вывод сообщение, что такой пользователь уже существует
        }
            const hashPassword = bcrypt.hashSync(password, 1);//кэшируем пароль
            const userRole = await Role.findOne({value:"USER"})//добавляем роль новому пользователю
            const user = await new User({name, email,password:hashPassword,roles:[userRole.value]})//создаем нового пользователя
            await user.save()//сохроняем в базу данных  
        
        return res.json({message: "Пользователь успешно зарегистрирован"})
    } catch (error) {
        return res.json({message: error})
    }
})

router.post('/login', async(req,res) => {//router для логина
    try {
        const {name,password} = req.body;

        const user = await User.findOne({name})

        const validPassword = bcrypt.compareSync(password, user.password)

        if(!validPassword){//если пароль не веный
            return res.json({message: "Пароль не верный"})
        }
        
        const token = generateAccessToken(user)//генерируем новый token
        return res.json({token}) 
     
    } catch (error) {
        res.json({message: error})  
    }
})

router.post('/upload',uploadMiddleware.single('image'),(req,res) => {
    try {
        //const token = req.headers.authorization;
       // const decodedData = jwt.verify(token,secret)
        res.send(req.file)
        
        //console.log(await User.findById(decodedData.user._id));      
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/users',adminMiddleware("ADMIN"),async(req, res) => {//router для получение пользователей
    try {
        res.send(await User.find())
    } catch (error) {
        res.json({message: error})
    }
})

router.get("/user",authMiddleware,async(req, res) => {
    try { 
        res.send(await User.findById(req.user.user._id))         
    } catch (error) {
        return res.json({message: error})
    }
})

module.exports = router