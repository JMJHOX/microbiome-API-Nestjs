import { QueryRunner } from 'typeorm';
export declare class ConnectionMock {
    createQueryRunner(mode?: 'master' | 'slave'): QueryRunner;
}
