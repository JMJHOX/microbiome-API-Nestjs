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
exports.UserAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("../../../common/dtos");
const role_type_constant_1 = require("../constants/role-type.constant");
class UserAuthDto extends dtos_1.AbstractDto {
    constructor(userAuth) {
        super(userAuth);
        this.pinCode = userAuth.pinCode;
        this.email = userAuth.email;
        this.role = userAuth.role;
        this.lastSuccessfulLoggedDate = userAuth.lastSuccessfulLoggedDate;
        this.lastFailedLoggedDate = userAuth.lastFailedLoggedDate;
        this.lastLogoutDate = userAuth.lastLogoutDate;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User pin code' }),
    __metadata("design:type", Number)
], UserAuthDto.prototype, "pinCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'rol user´s' }),
    __metadata("design:type", String)
], UserAuthDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email address' }),
    __metadata("design:type", String)
], UserAuthDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User last successful logged date' }),
    __metadata("design:type", Date)
], UserAuthDto.prototype, "lastSuccessfulLoggedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User last failed logged date' }),
    __metadata("design:type", Date)
], UserAuthDto.prototype, "lastFailedLoggedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User last logout date' }),
    __metadata("design:type", Date)
], UserAuthDto.prototype, "lastLogoutDate", void 0);
exports.UserAuthDto = UserAuthDto;
//# sourceMappingURL=user-auth.dto.js.map