const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    blogImage: {
        type: String,
        required: true
    },
    blogTitle: {
        type: String,
        required: true
    },
    blogSubtitle: {
        type: String,
        required: true
    },
    blogDescription: {
        type: String,
        required: true
    },
    blogQuote: {
        type: String,
        required: true
    },
    blogGist: {
        type: String,
        required: true
    },
    blogConcluder: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', blogSchema)