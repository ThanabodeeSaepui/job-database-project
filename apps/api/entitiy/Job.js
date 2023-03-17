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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Category_1 = __importDefault(require("./Category"));
const Company_1 = __importDefault(require("./Company"));
let Job = class Job {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Job.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Job.prototype, "job_name", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Job.prototype, "job_description", void 0);
__decorate([
    (0, typeorm_1.Column)("integer"),
    __metadata("design:type", Number)
], Job.prototype, "avail_seat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1.default, (category) => category.Jobs),
    (0, typeorm_1.JoinColumn)({ name: "category_id" }),
    __metadata("design:type", Category_1.default)
], Job.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Company_1.default, (company) => company.Jobs),
    (0, typeorm_1.JoinColumn)({ name: "company_id" }),
    __metadata("design:type", Company_1.default)
], Job.prototype, "company", void 0);
Job = __decorate([
    (0, typeorm_1.Entity)()
], Job);
exports.default = Job;
