const db = require('../models')
const Video = db.videos

exports.getAllData = async (req, res) => {
    try {
        const allData = await Video.find({}, {
            _id: 1,
            url_img: 1
        })
        return res.status(200).json({
            meta: {
                code: 200,
                message: "Success"
            },
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            meta: {
                code: 500,
                message: err.message
            },
            data: null
        })
    }
}

exports.getAllProductById = async (req, res) => {
    const id = req.params.id

    try {
        const getAllProductById = await Video.findById(id, {
            product_list: 1
        })
        return res.status(200).json({
            meta: {
                code: 200,
                message: "Success"
            },
            data: getAllProductById
        })
    } catch (err) {
        return res.status(500).json({
            meta: {
                code: 500,
                message: err.message
            },
            data: null
        })
    }
}

exports.getAllCommenttById = async (req, res) => {
    const id = req.params.id

    try {
        const getAllCommentById = await Video.findById(id, {
            comment_list: 1
        })
        return res.status(200).json({
            meta: {
                code: 200,
                message: "Success"
            },
            data: getAllCommentById
        })
    } catch (err) {
        return res.status(500).json({
            meta: {
                code: 500,
                message: err.message
            },
            data: null
        })
    }
}

exports.sendVideoComment = async (req, res) => {
    const id = req.params.id
    const {
        username,
        comment
    } = req.body

    try {
        const video = await Video.findById(id);

        if (!video) {
            return res.status(404).json({
                meta: {
                    code: 404,
                    message: 'Video not found'
                },
                data: null
            })
        }

        const newComment = {
            username: username,
            comment: comment
        }

        video.comment_list.push(newComment);

        await video.save()

        return res.status(200).json({
            meta: {
                code: 200,
                message: 'Success'
            },
            data: newComment
        })
    } catch (error) {
        return res.status(500).json({
            meta: {
                code: 500,
                message: error.message
            },
            data: null
        })
    }
}