module.exports = (mongoose) => {
    const productSchema = new mongoose.Schema({
        productID: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        linkProduct: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    })

    const commentSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    })

    const dataSchema = new mongoose.Schema({
        _id: {
            type: String,
            required: true
        },
        url_img: {
            type: String,
            required: true
        },
        product_list: [productSchema],
        comment_list: [commentSchema]
    })

    const Video = mongoose.model("Video", dataSchema)
    return Video
}