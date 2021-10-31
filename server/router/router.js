const Router = require('express')
const Post = require('../models/modelsPost')

const router = new Router()

router.post('/post', async(req, res) => {
    try {
        const {title,desc,image} = req.body;

        const post = await new Post({title,desc,image})

        await post.save()

        return res.json({message:"Post was created"})

    } catch (error) {
        res.send({message: "Error"})
    }
})

router.get('/postlist',async(req, res) => {
    res.send(await Post.find())
})

router.get('/post/:id', async(req, res) => {
    const {id} = req.params

    const post = await Post.findById(id)

    res.send(post)
})

router.post("/remove", async(req, res) => {
    await Post.findByIdAndDelete({_id:req.body.id})
})



module.exports = router