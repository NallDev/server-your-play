module.exports = (app) => {
    const videos = require('../controllers/videos')
    const router = require('express').Router()
    const { validateCommentData } = require('../middleware/validate')

    router.get('/', videos.getAllData)
    router.get('/:id', videos.getAllProductById)
    router.get('/comment/:id', videos.getAllCommenttById)
    router.post('/comment/:id', validateCommentData, videos.sendVideoComment)

    app.use('/api/videos', router)
}