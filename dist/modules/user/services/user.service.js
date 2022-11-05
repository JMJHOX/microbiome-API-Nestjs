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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../entities");
const utils_1 = require("../../../common/utils");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exceptions_1 = require("../exceptions");
const constraints_1 = require("../../database/constraints");
let UserService = class UserService {
    constructor(_userRepository, DataSourceService) {
        this._userRepository = _userRepository;
        this.DataSourceService = DataSourceService;
    }
    async createUser(userCreateDto) {
        try {
            await this.DataSourceService.manager.transaction(async (transactionalEntityManager) => {
                const user = await transactionalEntityManager.save(entities_1.UserEntity, userCreateDto);
                const pinCode = await this._createPinCode();
                const password = user.password;
                const createdUser = Object.assign(Object.assign({}, userCreateDto), { password, user, pinCode });
                await transactionalEntityManager.save(entities_1.UserAuthEntity, createdUser);
                return this.findUser({ uuid: user.uuid });
            });
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.code) === constraints_1.PostgresErrorCode.UniqueViolation) {
                throw new common_1.BadRequestException('User with that email already exists');
            }
            throw new exceptions_1.UserCreationException(error);
        }
    }
    async _createPinCode() {
        const pinCode = this._generatePinCode();
        const user = await this.findUserAuth({ pinCode });
        try {
            return user ? await this._createPinCode() : pinCode;
        }
        catch (error) {
            throw new exceptions_1.PinCodeGenerationErrorException(error);
        }
    }
    _generatePinCode() {
        return (0, utils_1.generateRandomInteger)(1, 10e5 - 1);
    }
    async findUserAuth(options) {
        return this.findUser(options);
    }
    async findUser(options) {
        const queryBuilder = this._userRepository.createQueryBuilder('user');
        queryBuilder.leftJoinAndSelect('user.userAuth', 'userAuth');
        if (options.uuid && (0, utils_1.isUUID)(options.uuid)) {
            queryBuilder.orWhere('user.uuid = :uuid', { uuid: options.uuid });
        }
        if (options.pinCode && (0, utils_1.isNumeric)(options.pinCode)) {
            queryBuilder.orWhere('userAuth.pinCode = :pinCode', {
                pinCode: options.pinCode,
            });
        }
        if (options.email && (0, utils_1.isEmail)(options.email)) {
            queryBuilder.orWhere('userAuth.email = :email', { email: options.email });
        }
        const resultQuery = await queryBuilder.getOne();
        return resultQuery;
    }
    async getUser(uuid) {
        return this.findUser({ uuid });
    }
    async getUserByMail(email) {
        const userData = await this.findUser({ email });
        return userData;
    }
    async getUsers(options) {
        const queryBuilder = this._userRepository.createQueryBuilder('user');
        const [users, itemCount] = await queryBuilder
            .orderBy('user.createdAt', options.order)
            .skip(options.skip)
            .take(options.take)
            .getManyAndCount();
        return;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map