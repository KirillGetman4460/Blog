const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, "./images")
    },
    filename(req, file, cb){
        const date = moment().format('DD.MM.YYYYHH-mm-ss_SSS')
        cb(null, `${date}-${file.originalname}`)
    }
})

const imageTypes = ["image/png","image/jpeg"]

const fileFilter = (req, file, cb) =>{
    if(imageTypes.indexOf(file.minetype) !== -1){
        return cb(null,true)
    }
    cb(null,false)
}

const limits = {
    fileSize : 1024 * 1024 * 5
}

module.exports = multer({ storage})