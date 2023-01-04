const mongoose = require("mongoose");

const localDB = `mongodb+srv://chinyere:vNAsRcM3df89L8Iv@jobinairee.pgajtf0.mongodb.net/newJob?retryWrites=true&w=majority`;

const connectDB = async () => {
  await mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to MongoDB Successfully!");
};

module.exports = connectDB;