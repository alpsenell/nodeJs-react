import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    content: String
});

module.exports = mongoose.model('Todo', todoSchema);
