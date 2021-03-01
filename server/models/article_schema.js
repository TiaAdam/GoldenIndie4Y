const { Schema, model } = require('mongoose');

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title field is required!'],
    },
    content: {
      type: String,
      required: [true, 'Content field is required!'],
    },
    category: {
      type: String,
      required: [true, 'Type field is required!'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: [true, 'User ID field is required!'],
    },
    mentionedMovies: [{
      tmdb_id: {
        type: Number,
      },
      title: {
        type: String,
      },
      image: {
        type: String,
      },
      description: {
        type: String,
      }
    }],
  },
  { timestamps: true },
);

module.exports = model('articles', articleSchema);
