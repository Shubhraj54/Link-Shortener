const mongoose = require("mongoose");

const mongo = async () => {
  try {
    await mongoose.connect(URI , {
      useNewUrlParser: true,  // To handle URL parsing deprecation
      useUnifiedTopology: true,  // To handle server discovery deprecation
    });
    console.log("Database is now connected");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

module.exports = mongo;
