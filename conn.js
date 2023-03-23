const mongoose = require("mongoose");
const DB =
  "mongodb+srv://Naman21:Nasir123@cluster0.hfnpuvw.mongodb.net/dude1?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((error) => {
    console.log("error hai bhai");
  });
