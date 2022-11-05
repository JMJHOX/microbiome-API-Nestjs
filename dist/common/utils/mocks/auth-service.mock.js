"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServiceMock = exports.authServiceMock = void 0;
const authServiceMock = () => ({
    collectionGetQuery: jest.fn(),
    hello: jest.fn(),
});
exports.authServiceMock = authServiceMock;
const userServiceMock = () => ({
    collectionGetQuery: jest.fn(),
    findUser: jest.fn(),
});
exports.userServiceMock = userServiceMock;
//# sourceMappingURL=auth-service.mock.js.map