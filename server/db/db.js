const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/file_upload", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

mongoose.connect(
  "mongodb+srv://files_db_user:1234567890@cluster0.za0qg.mongodb.net/files_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

// mongo "mongodb+srv://cluster0.za0qg.mongodb.net/<dbname>" --username files_db_user
