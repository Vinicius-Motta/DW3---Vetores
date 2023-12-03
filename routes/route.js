const express = require("express");
const routerApp = express.Router();

const appApi = require("../controller/ctlApi");

routerApp.post("/ordenar-numeros", appApi.ordenarNumeros);
routerApp.post("/obter-min-max", appApi.obterMinMax);
module.exports = routerApp;
