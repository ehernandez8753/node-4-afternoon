require("dotenv").config({ path: __dirname + "/../.env"})
const express = require("express");
const session = require("express-session");
const checkForSession = require("./middlewares/checkForSession.js");
const swagController = require("./controllers/swagController.js");
const app = express();
const { SERVER_PORT, SESSION_SECRET } = process.env;

//Middleware-------------------------------
app.use(express.json());
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
)
app.use(checkForSession);

app.listen(SERVER_PORT, () => {console.log(`Listening on port ${SERVER_PORT}`)});

//ENDPOINTS-----------------------------------
app.get("/api/swag", swagController.read);

