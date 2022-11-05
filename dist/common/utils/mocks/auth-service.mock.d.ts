/// <reference types="jest" />
export declare const authServiceMock: () => {
    collectionGetQuery: jest.Mock<any, any>;
    hello: jest.Mock<any, any>;
};
export declare const userServiceMock: () => {
    collectionGetQuery: jest.Mock<any, any>;
    findUser: jest.Mock<any, any>;
};
