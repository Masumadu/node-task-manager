const TaskModel = require('../models/tasks');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-errors');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await TaskModel.find()
    return res.status(200).json({ tasks });
    
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await TaskModel.create(req.body)
    return res.status(201).json({ task });
    
})

const getTask = asyncWrapper(async (req, res, next) => {
    const task = await TaskModel.findById(req.params.id)
    if (!task) {
        return next(createCustomError(`task(${req.params.id}) not found`, 404));
    }
    return res.status(200).json({ task });
})

const updateTask = asyncWrapper(async (req, res, next) => { 
    const task = await TaskModel.findByIdAndUpdate(
        req.params.id, req.body, {new: true, runValidators: true}
    )
    if (!task) {
        return next(createCustomError(`task(${req.params.id}) not found`, 404));
    }
    return res.status(200).json({ task });
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    const task = await TaskModel.findByIdAndDelete(req.params.id)
    if (!task) {
        return next(createCustomError(`task(${req.params.id}) not found`, 404));
    }
    return res.status(204).send('success');
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}