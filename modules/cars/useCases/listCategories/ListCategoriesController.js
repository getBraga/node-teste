"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesController = void 0;
class ListCategoriesController {
    constructor(listCategoriesUseCase) {
        this.listCategoriesUseCase = listCategoriesUseCase;
    }
    handle(resquest, response) {
        const all = this.listCategoriesUseCase.execute();
        return response.json(all);
    }
}
exports.ListCategoriesController = ListCategoriesController;
