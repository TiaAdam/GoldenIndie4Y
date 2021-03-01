const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'content field is required'],
    },
  },
  { timestamps: true },
);

module.exports = model('reviews', reviewSchema);
