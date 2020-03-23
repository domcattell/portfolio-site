const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    code: String,
    demo: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("project", projectSchema)