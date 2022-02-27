const Task = require('./models/Task.js');

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    getAllTasks: async () => {
      return await Task.find({})
    },
    getTask: async (_, args) => {
      // console.log({args})
      const { id } = args;
      const task = await Task.findById(id)
      return task;
    },
  },
  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args.task;
      const newTask = new Task({ title, description })
      await newTask.save();
      return newTask;
    },
    removeTask: async (_, args) => {
      const { id } = args;
      const task = await Task.findByIdAndDelete(id)
      return task;
    },
    updateTask: async (_, {id, task}) => {
      const { title, description } = task;
      const updatedTask = await Task.findByIdAndUpdate(id, { title, description }, { new: true })
      return updatedTask;
    }
  }
}

module.exports = {resolvers}