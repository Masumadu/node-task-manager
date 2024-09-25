require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
// add middlewares
app.use(express.json())

// setup routes
app.get('/', (req, res) => {
    return res.send('Task Manager Application');
});
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connectDB();
        app.listen(port, console.log(`server listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()