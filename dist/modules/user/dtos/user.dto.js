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
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const dtos_1 = require("../../../common/dtos");
const dtos_2 = require("../dtos");
class UserDto extends dtos_1.AbstractDto {
    constructor(user) {
        var _a;
        super(user);
        this.firstName = user.firstName;
        this.middleName = user === null || user === void 0 ? void 0 : user.middleName;
        this.lastName = user.lastName;
        this.motherName = user === null || user === void 0 ? void 0 : user.motherName;
        this.birthdate = user === null || user === void 0 ? void 0 : user.birthdate;
        this.userAuth = (_a = user.userAuth) === null || _a === void 0 ? void 0 : _a.toDto();
    }
    get shortName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User first name' }),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User middle name' }),
    __metadata("design:type", String)
], UserDto.prototype, "middleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User last name' }),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User mother name' }),
    __metadata("design:type", String)
], UserDto.prototype, "motherName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User birthdate' }),
    __metadata("design:type", Date)
], UserDto.prototype, "birthdate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User avatar image' }),
    __metadata("design:type", String)
], UserDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User session information',
        type: () => dtos_2.UserAuthDto,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", dtos_2.UserAuthDto)
], UserDto.prototype, "userAuth", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map