import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUserAndUserAuthTables1632755466701 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
