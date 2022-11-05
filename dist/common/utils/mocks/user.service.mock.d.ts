/// <reference types="jest" />
export declare const mockedUserService: {
    findUser: jest.Mock<any, any>;
};
export declare type MockType<T> = {
    [P in keyof T]?: jest.Mock<{}>;
};
