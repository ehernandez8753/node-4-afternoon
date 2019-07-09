require("dotenv").config({ path: __dirname + "/../.env"})
const express = require("express");
const session = require("express-session");
const checkForSession = require("./middlewares/checkForSession.js");
const swagController = require("./controllers/swagController.js");
const authController = require("./controllers/authController.js");
const cartController = require("./controllers/cartController.js");
const searchController = require("./controllers/searchController.js");
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
);
app.use(checkForSession);
app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, () => {console.log(`Listening on port ${SERVER_PORT}`)});

//ENDPOINTS-----------------------------------

//SWAG
app.get("/api/swag", swagController.read);
//AUTH
app.post("/api/login", authController.login);
app.post("/api/register", authController.register);
app.post("/api/signout", authController.signout);
app.get("/api/user", authController.getUser);
//CART
app.post("/api/cart/checkout", cartController.checkout);
app.post("/api/cart/:id", cartController.add);
app.delete("/api/cart/:id", cartController.delete);
//SEARCH
app.get("/api/search", searchController.search);

