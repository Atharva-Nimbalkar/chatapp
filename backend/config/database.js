const mongoose=require('mongoose');

/**
 * The above function `databaseConnect` connects to a MongoDB database using the `mongoose` library.
 */
const databaseConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongo db Database connected successfully");
}).catch((error)=>{
    console.log(error);
})
}
/* `module.exports=databaseConnect;` is exporting the `databaseConnect` function so that it can be used
in other files. This allows other files to import and use the `databaseConnect` function. */
module.exports=databaseConnect;