const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name field is required!'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name field is required!'],
    },
    dateOfBirth: {
      type: Number,
      required: [true, 'Date of birth field is required!'],
    },
    email: {
      type: String,
      required: [true, 'Email field is required!'],
    },
    country: {
      type: String,
      required: [true, 'Country field is required!'],
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'roles', 
    },
    likedReviews: [{
      type: Schema.Types.ObjectId,
      ref: 'reviews', 
    }],
    favoriteMovies: [{
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

module.exports = model('users', userSchema);
