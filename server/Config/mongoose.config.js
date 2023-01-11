const mongoose = require("mongoose");
module.exports = (DB) => {
    mongoose.connect(`mongodb://127.0.0.1/${DB}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log(`Established connection to ${DB} database `))
    .catch(error => console.log((`Something went wrong when connecting to ${DB} database`)))
}