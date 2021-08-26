// Configure our app to use env file (which we installed using "npm install dotenv" in terminal)
require('dotenv').config();

// Import the express framework (which we installed using npm in terminal)
const Express = require('express');

// Make a local instance of the express framework
const app = Express();
app.use(require('./middleware/headers'));
app.use(Express.json());

// ** This MUST be below the const Express = require **
const dbConnection = require("./db");

// Serving a static file
// app.use(Express.static(__dirname + '/public'));
// console.log(__dirname);

// http://localhost:4000/ -- We can test this .get in Postman and see the index.html
// app.get('/', (requst, response) => response.render('index'));

// Import the controllers
const controllers = require('./controllers');

app.use('/user', controllers.userController);

// http://localhost:4000/joke -- We can also text this .get in Postman, however the endpoint is now /joke
// app.get('/joke',(req, res) => res.send(`I'm so punny!`));
app.use('/joke', controllers.jokeController)

dbConnection.authenticate()
.then (() => dbConnection.sync())  // This is similar to "=> (force:true)"
.then(() => {
    // Have our app "listen", or run, on a specific port
    app.listen(process.env.PORT, () => {      
    console.log(`[Server]: App is listening on ${process.env.PORT}.`)
})
})
.catch((err) => {
    console.log("[Server:] Server Crashed");
    console.log(err);
});