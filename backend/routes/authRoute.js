/* This line of code is importing the `Router` class from the `express` module in Node.js. The `Router`
class is used to create modular, mountable route handlers. By assigning it to the variable `router`,
you can then define routes and their corresponding handlers using this `router` object. */
const router = require('express').Router();
/*  it is using object destructuring to import the `userRegister` function from the `authController` module located in the
`../controller` directory. */
const {userRegister} = require('../controller/authController');

/* The line `router.post('/user-register', userRegister);` is defining a POST route with the path
'/user-register' on the `router` object. When a POST request is made to this route, the
`userRegister` function imported from the `authController` module will be called to handle the
request. This allows you to register a new user by sending a POST request to the '/user-register'
endpoint. */
router.post('/user-register', userRegister);

/* `module.exports = router;` is exporting the `router` object so that it can be used in other parts of
the application. By assigning `router` to `module.exports`, any file that imports this module will
have access to the defined routes and handlers. This allows the routes defined in this file to be
used by the main application file or other modules that require this router module. */
module.exports = router;