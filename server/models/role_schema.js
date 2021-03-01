const { Schema, model } = require('mongoose');

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    age: {
      type: Number,
      required: [true, 'age field is required'],
    },
  },
  { timestamps: true },
);

module.exports = model('roles', roleSchema);
