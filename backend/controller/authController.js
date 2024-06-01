/*  exporting a function named `userRegister` as a property of the `module.exports` object. This
function takes two parameters `req` and `res`, which typically represent the request and response
objects in a Node.js application. Inside the function, it simply logs the message 'register is
working' to the console. */
module.exports.userRegister = (req, res) => {
  console.log('register is working');
}


