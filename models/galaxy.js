import mongoose from 'mongoose'

const Schema = mongoose.Schema

const galaxySchema  = new Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    constellation: {
        type: String,
        required: true
    },
    nameOrigin: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
})

export const Galaxy = mongoose.model('Galaxy', galaxySchema)
