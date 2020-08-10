import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    status: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);
