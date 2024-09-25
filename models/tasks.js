const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required'],
            trim: true,
            maxLength: [20, 'name cannot be more than 20 characters']
        },
        completed: {
            type: Boolean,
            default: false
        }
    }
);

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;