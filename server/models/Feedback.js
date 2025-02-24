const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  duration: { type: String, required: true },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
