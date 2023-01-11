const express  = require("express");
const cors  = require("cors");
const app = express();

const PORT = 8000;
const DB ="authordb"

app.use(express.json(), cors(), express.urlencoded({extended:true}))

require("./Config/mongoose.config")(DB)
require("./Routes/author.router")(app)

 app.listen(PORT, ()=> console.log(`server is up on ${PORT}`))