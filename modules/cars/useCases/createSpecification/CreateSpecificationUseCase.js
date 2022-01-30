"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpeificationUseCase = void 0;
class CreateSpeificationUseCase {
    constructor(specificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }
    execute({ name, description }) {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }
        this.specificationsRepository.create({
            name,
            description,
        });
    }
}
exports.CreateSpeificationUseCase = CreateSpeificationUseCase;
