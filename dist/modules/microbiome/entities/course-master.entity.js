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
var CourseMaster_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseMaster = void 0;
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../../user/entities");
const typeorm_1 = require("typeorm");
let CourseMaster = CourseMaster_1 = class CourseMaster extends typeorm_1.BaseEntity {
    constructor(courseCollectionName, courseCollectionDesc, courseCollectionCategory, courseCollectionReq, authorUser, authorEmail, courseCollectionIdiom, courseCollectionRating, courseCollectionMisc) {
        super();
        this.courseCollectionName = courseCollectionName;
        this.courseCollectionDesc = courseCollectionDesc;
        this.courseCollectionCategory = courseCollectionCategory;
        this.courseCollectionReq = courseCollectionReq;
        this.courseCollectionIdiom = courseCollectionIdiom;
        this.courseCollectionRating = courseCollectionRating;
        this.courseCollectionMisc = courseCollectionMisc;
        this.authorUser = authorUser;
        this.authorEmail = authorEmail;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CourseMaster.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseMaster.prototype, "courseCollectionName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseMaster.prototype, "authorUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseMaster.prototype, "authorEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseMaster.prototype, "courseCollectionDesc", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseMaster.prototype, "courseCollectionCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseMaster.prototype, "courseCollectionReq", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseMaster.prototype, "courseCollectionRating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseMaster.prototype, "courseCollectionMisc", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseMaster.prototype, "courseCollectionIdiom", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], CourseMaster.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone', nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], CourseMaster.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CourseMaster_1, (CourseMaster) => CourseMaster),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], CourseMaster.prototype, "courseAuthor", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.UserEntity, (UserEntity) => UserEntity, { cascade: true }),
    __metadata("design:type", entities_1.UserEntity)
], CourseMaster.prototype, "User", void 0);
CourseMaster = CourseMaster_1 = __decorate([
    (0, typeorm_1.Entity)({ name: 'courses_master' }),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String, String])
], CourseMaster);
exports.CourseMaster = CourseMaster;
//# sourceMappingURL=course-master.entity.js.map