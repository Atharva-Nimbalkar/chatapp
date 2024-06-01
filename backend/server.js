const express = require('express');

const app=express();
const dotenv=require('dotenv')

/* following line is importing a function or module from
the file located at `./config/database`. This function or module is likely responsible for
establishing a connection to the database used by the application. By requiring this file, the
`databaseConnect` constant is assigned the value of the exported function or module, allowing it to
be called later in the code to connect to the database. */
const databaseConnect=require('./config/database')
/* Following line  is importing a router module from the file
located at `./routes/authRoute`. This router module likely contains route handlers and middleware
specific to authentication-related endpoints in the application. By requiring this file and
assigning it to the `authRouter` constant, the router module can be mounted as middleware in the
Express application using `app.use('/api/messenger', authRouter)`. This allows the
authentication-related routes defined in `authRouter` to be accessed under the `/api/messenger`
endpoint in the application. */
const authRouter=require('./routes/authRoute')

const PORT=process.env.PORT || 5000

/* The `dotenv.config()` function call with the specified path `'backend/config/config.env'` is loading
and parsing the configuration variables from the `config.env` file located in the `backend/config`
directory. */
dotenv.config({
    path:'backend/config/config.env'
}) 
/* `app.use(express.json());` is setting up middleware in the Express application to parse incoming
requests with JSON payloads. This middleware will parse the incoming request body and make it
available under `req.body` in your route handlers. This allows you to easily work with JSON data in
your application. */
app.use(express.json());
/* `app.use('/api/messenger', authRouter);` is mounting the `authRouter` middleware on the Express
application under the `/api/messenger` endpoint. This means that any routes defined in the
`authRouter` module will be accessible under the `/api/messenger` path in the application. Requests
made to routes defined in `authRouter` will be handled by the middleware functions specified in that
router module. */
app.use('/api/messenger',authRouter);
/* Specifically, it is defining a route for handling GET requests
to the root URL ("/") of the application. */
app.get("/",(req,res)=>{
    res.send("Hello World");
})

/* The `databaseConnect()` function is likely responsible for establishing a connection to the database
used by the application. When this function is called, it initiates the process of connecting to the
database, allowing the application to interact with the database to perform operations such as
reading, writing, updating, or deleting data. This function is crucial for ensuring that the
application can communicate with the database and access the necessary data for its functionality. */
databaseConnect();
/*  snippet is setting up the Express application to listen for incoming HTTP requests on the specified port
number `PORT`. */
app.listen(PORT,function(){
    console.log(`Server is running on port ${PORT}`)    
})