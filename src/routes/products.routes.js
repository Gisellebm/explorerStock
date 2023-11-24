const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization');

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.get("/", productsController.index);  //listar para todos os usuários
productsRoutes.post("/", verifyUserAuthorization("admin"), productsController.create);  // rota para criar só para ususário admin

module.exports = productsRoutes;