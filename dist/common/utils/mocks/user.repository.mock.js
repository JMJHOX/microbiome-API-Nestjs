"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockedUserRepository = void 0;
exports.mockedUserRepository = {
    createQueryBuilder: jest.fn(() => ({
        getOne: jest.fn(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        orWhere: jest.fn().mockReturnThis(),
    })),
};
//# sourceMappingURL=user.repository.mock.js.map