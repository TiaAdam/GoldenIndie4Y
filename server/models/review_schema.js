const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: [true, 'User ID field is required!'],
    },
    title: {
      type: String,
      required: [true, 'Title field is required!'],
    },
    content: {
      type: String,
      required: [true, 'content field is required'],
    },
  },
  { timestamps: true },
);

module.exports = model('reviews', reviewSchema);
