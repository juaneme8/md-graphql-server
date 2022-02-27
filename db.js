const { connect } = require('mongoose')

const connectDB = async () => {
  try {
    await connect(
      "mongodb://localhost/tasksdb"
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectDB };