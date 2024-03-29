const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' },
});

mongoose.model('comment',commentSchema);

module.exports = mongoose.model('Comment', commentSchema);