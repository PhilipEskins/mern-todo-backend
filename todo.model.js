const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todo = new Schema({
  todo_description: {
    type: String
  },
  todo_responsible: {
    type: String
  },
  todo_priority: {
    type: String
  },
  todo_completed: {
    type: Boolean
  }
});

module.exports = monsoose.model('Todo', Todo);
