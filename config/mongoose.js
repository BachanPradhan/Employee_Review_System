const mongoose = require('mongoose');

//mongoose.connect(`mongodb://127.0.0.1:27017/employee_review_db`);

mongoose.connect(`mongodb+srv://bachanpradhan:bachanpradhan@bachan.5qe5p2k.mongodb.net/`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;



// const mongoose = require("mongoose");
// //mongoose.set('strictQuery', false);
// const mongoDB = "mongodb://127.0.0.1/contact_list_db"; 


// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
//   console.log('connected to DB');
// }
