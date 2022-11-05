"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryMockFactoryDepre = exports.MockDataSource = exports.repositoryMockFactory = void 0;
exports.repositoryMockFactory = jest.fn(() => ({
    create: jest.fn(),
    save: jest.fn(),
    update: jest.fn().mockReturnThis(),
    findOne: jest.fn().mockReturnValueOnce(value => value),
    createQueryBuilder: jest.fn(() => ({
        where: jest.fn().mockReturnThis(),
        setParameter: jest.fn().mockReturnThis(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        getOne: jest.fn((id) => Promise.resolve()),
        orWhere: jest.fn().mockReturnThis(),
    }))
}));
exports.MockDataSource = jest.fn(() => ({
    manager: jest.fn(() => ({
        transaction: (() => { }),
    }))
}));
exports.repositoryMockFactoryDepre = jest.fn(() => ({
    findOne: jest.fn(entity => entity),
    createQueryBuilder: jest.fn(() => ({
        offset: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        getManyAndCount: jest.fn().mockReturnThis(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        delete: jest.fn().mockReturnThis(),
        innerJoinAndSelect: jest.fn().mockReturnThis(),
        innerJoin: jest.fn().mockReturnThis(),
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        execute: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
    })),
}));
//# sourceMappingURL=repository-factory.mock.js.map