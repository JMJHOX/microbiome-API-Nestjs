"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionMock = void 0;
const qr = {
    manager: {},
};
class ConnectionMock {
    createQueryRunner(mode) {
        return qr;
    }
}
exports.ConnectionMock = ConnectionMock;
//# sourceMappingURL=connection.mock.js.map