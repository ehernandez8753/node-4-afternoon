const swag = require("../models/swag.js");

module.exports = (req, res, next) => {
    read: (req, res, next) => {
        res.status(200).send(swag);
    }
};