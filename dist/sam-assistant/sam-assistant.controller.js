"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamAssistantController = void 0;
const common_1 = require("@nestjs/common");
const sam_assistant_service_1 = require("./sam-assistant.service");
const question_dto_1 = require("./dtos/question.dto");
let SamAssistantController = class SamAssistantController {
    constructor(samAssistantService) {
        this.samAssistantService = samAssistantService;
    }
    async createThread() {
        return await this.samAssistantService.createThread();
    }
    async userQuestion(QuestionDto) {
        return await this.samAssistantService.userQuestion(QuestionDto);
    }
};
exports.SamAssistantController = SamAssistantController;
__decorate([
    (0, common_1.Post)('create-thread'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SamAssistantController.prototype, "createThread", null);
__decorate([
    (0, common_1.Post)('user-question'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_dto_1.QuestionDto]),
    __metadata("design:returntype", Promise)
], SamAssistantController.prototype, "userQuestion", null);
exports.SamAssistantController = SamAssistantController = __decorate([
    (0, common_1.Controller)('origen-assistant'),
    __metadata("design:paramtypes", [sam_assistant_service_1.SamAssistantService])
], SamAssistantController);
//# sourceMappingURL=sam-assistant.controller.js.map