const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollectionArea = new Schema(
    {
        collectionName: { type: String, required: true },
        lineman: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('collectionArea', CollectionArea)