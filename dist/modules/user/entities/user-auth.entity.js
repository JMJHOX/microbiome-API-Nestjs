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
exports.UserAuthEntity = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../common/entities");
const role_type_constant_1 = require("../constants/role-type.constant");
const dtos_1 = require("../dtos");
const user_entity_1 = require("./user.entity");
let UserAuthEntity = class UserAuthEntity extends entities_1.AbstractEntity {
    constructor(role, email, password, isEmailConfirmed, currentHashedRefreshToken, user) {
        super();
        this.dtoClass = dtos_1.UserAuthDto;
        this.role = role || role_type_constant_1.RoleType.USER;
        this.email = email || '';
        this.password = password || '';
        this.isEmailConfirmed = isEmailConfirmed || false;
        this.currentHashedRefreshToken = currentHashedRefreshToken || '';
        this.user = user || undefined;
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: role_type_constant_1.RoleType, default: role_type_constant_1.RoleType.USER }),
    __metadata("design:type", String)
], UserAuthEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], UserAuthEntity.prototype, "pinCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserAuthEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAuthEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], UserAuthEntity.prototype, "lastSuccessfulLoggedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], UserAuthEntity.prototype, "lastFailedLoggedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], UserAuthEntity.prototype, "lastLogoutDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone', nullable: true }),
    __metadata("design:type", Date)
], UserAuthEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserAuthEntity.prototype, "currentHashedRefreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Boolean)
], UserAuthEntity.prototype, "isEmailConfirmed", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, (user) => user.userAuth, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], UserAuthEntity.prototype, "user", void 0);
UserAuthEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users_auth' }),
    __metadata("design:paramtypes", [String, String, String, Boolean, String, user_entity_1.UserEntity])
], UserAuthEntity);
exports.UserAuthEntity = UserAuthEntity;
//# sourceMappingURL=user-auth.entity.js.map