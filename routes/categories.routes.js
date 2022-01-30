"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const createCategory_1 = require("../modules/cars/useCases/createCategory");
const importCategory_1 = require("../modules/cars/useCases/importCategory");
const listCategories_1 = require("../modules/cars/useCases/listCategories");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
const upload = (0, multer_1.default)({
    dest: "./tmp",
});
categoriesRoutes.post("/", (request, response) => {
    return createCategory_1.createCategoryController.handle(request, response);
});
categoriesRoutes.get("/", (request, response) => {
    return listCategories_1.listCategoriesController.handle(request, response);
});
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategory_1.importCategoryController.handle(request, response);
});
