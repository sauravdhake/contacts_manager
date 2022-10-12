// const app = require("./app");
// const port = process.env.PORT || 8080;
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://sauravdhake:8208431391@cluster0.w14m38i.mongodb.net/contacts_manager",()=>console.log("DB is connected"));
// app.listen(port,()=>console.log(`Server is running at ${port}`))



const mongoose = require("mongoose");

const ConnetToDb = async() => {
  return mongoose
    .connect(
      "mongodb+srv://sauravdhake:8208431391@cluster0.w14m38i.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("mongoose connect");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = ConnetToDb;