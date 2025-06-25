const express = require("express");

const {login} = async (req, res)

const routes = express.Router();

routes.get("/login", login)


module.exports =route