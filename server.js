// required modules
const { connect } = require('mongoose');
const app = require('./src/app');
const port = 3000;

const connectDB = require("./src/db/db")

connectDB();









app.get("/",(req,res)=>{
    res.send("Hello World");
});








































app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});