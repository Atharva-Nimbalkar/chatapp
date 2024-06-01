const mongoose=require('mongoose');

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
// DATABASE_URL=mongodb+srv://gbrain2753:Atharva9684@cluster0.jneej3l.mongodb.net/
module.exports=databaseConnect;