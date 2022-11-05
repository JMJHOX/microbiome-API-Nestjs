"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTables1632794648554 = void 0;
class UpdateTables1632794648554 {
    constructor() {
        this.name = 'UpdateTables1632794648554';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."users" ALTER COLUMN "birthdate" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."users" ALTER COLUMN "birthdate" SET NOT NULL`);
    }
}
exports.UpdateTables1632794648554 = UpdateTables1632794648554;
//# sourceMappingURL=1632794648554-UpdateTables.js.map