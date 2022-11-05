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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../common/entities");
const dtos_1 = require("../dtos");
const entities_2 = require("../entities");
let UserEntity = class UserEntity extends entities_1.AbstractEntity {
    constructor(firstName, middleName, lastName, motherName, birthdate, avatar, userAuth) {
        super();
        this.dtoClass = dtos_1.UserDto;
        this.firstName = firstName || '';
        this.middleName = middleName || '';
        this.lastName = lastName || '';
        this.motherName = motherName || '';
        this.birthdate = birthdate || undefined;
        this.avatar = avatar || '';
        this.userAuth = userAuth || undefined;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "middleName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "motherName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone', nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_2.UserAuthEntity, (userAuth) => userAuth.user, {
        eager: true,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", entities_2.UserAuthEntity)
], UserEntity.prototype, "userAuth", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' }),
    __metadata("design:paramtypes", [String, String, String, String, Date, String, entities_2.UserAuthEntity])
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map