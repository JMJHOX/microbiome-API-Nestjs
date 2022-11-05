"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const testing_1 = require("@nestjs/testing");
const bcrypt_1 = require("bcrypt");
const typeorm_1 = require("typeorm");
const mocks_1 = require("../../../common/utils/mocks");
const services_1 = require("../../user/services");
const entities_1 = require("../../user/entities");
const services_2 = require("../services");
const role_type_constant_1 = require("../../user/constants/role-type.constant");
jest.mock('bcrypt');
describe('The AuthenticationService', () => {
    let module;
    let authService;
    let bcryptCompare;
    let userAuthEntity;
    let findAuthentication;
    beforeEach(async () => {
        userAuthEntity = new entities_1.UserAuthEntity(role_type_constant_1.RoleType.USER, 'user@email.com', 'strongPassDumy');
        findAuthentication = jest.fn().mockResolvedValue(userAuthEntity);
        const authenticationRepository = {
            findOne: findAuthentication,
        };
        bcryptCompare = jest.fn().mockReturnValue(true);
        bcrypt_1.default.compare = bcryptCompare;
        module = await testing_1.Test.createTestingModule({
            imports: [],
            providers: [
                services_1.UserService,
                services_1.UserAuthService,
                services_2.AuthService,
                { provide: config_1.ConfigService, useValue: mocks_1.mockedConfigService },
                { provide: jwt_1.JwtService, useValue: mocks_1.mockedJwtService },
                { provide: typeorm_1.Connection, useClass: mocks_1.ConnectionMock },
            ],
        }).compile();
        authService = await module.get(services_2.AuthService);
    });
    afterEach(async () => {
        await module.close();
    });
    describe('when accessing the data of authenticating user', () => {
        it('should attempt to get a user by email', async () => {
            const getAuthentication = jest.spyOn(authService, 'validateUser');
            await authService.validateUser({
                identifier: 'user@email.com',
                password: 'strongPassDumy',
            });
            expect(getAuthentication).toBeCalledTimes(1);
        });
        describe('and the provided password is not valid', () => {
            beforeEach(() => {
                bcryptCompare.mockReturnValue(false);
            });
            it('should throw an error', async () => {
                await expect(authService.validateUser({
                    identifier: 'user@email.com',
                    password: 'strongPassDumy',
                })).rejects.toThrow();
            });
        });
        describe('and the provided password is valid', () => {
            beforeEach(() => {
                bcryptCompare.mockReturnValue(true);
            });
            describe('and the user is not found in the database', () => {
                beforeEach(() => {
                    findAuthentication.mockResolvedValue(undefined);
                });
                it('should throw an error', async () => {
                    await expect(authService.validateUser({
                        identifier: 'user@email.com',
                        password: 'strongPassDumy',
                    })).rejects.toThrow();
                });
            });
        });
    });
});
//# sourceMappingURL=auth.service.integration.js.map