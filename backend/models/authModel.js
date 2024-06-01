//database

/* This line of code is importing the `model` and `Schema` objects from the 'mongoose' library in
Node.js. The `model` object is used to create and access collections in the MongoDB database, while
the `Schema` object is used to define the structure of the data that will be stored in the database. */
const {model,Schema}=require('mongoose');

const registerSchema=new Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        select:false
    },
    image:{
        type:String,
        required:true,
    }
    },
/* The `{timestamps:true}` option in the Mongoose schema definition automatically adds two fields to
the documents in the collection: `createdAt` and `updatedAt`. */
    {timestamps:true}
);    

/* `module.exports=model('user',registerSchema);` is exporting a model named 'user' that is created
using the registerSchema defined earlier. This model will be used to interact with the 'user'
collection in the MongoDB database. The `model` function takes two arguments - the name of the
collection ('user' in this case) and the schema (registerSchema) that defines the structure of the
documents in that collection. By exporting this model, other parts of the application can import and
use it to perform CRUD operations on the 'user' collection. */
module.exports=model('user',registerSchema);