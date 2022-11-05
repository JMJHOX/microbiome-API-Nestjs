import { DataSource, Repository } from "typeorm";
import { MockType } from "./user.service.mock";
export declare const repositoryMockFactory: () => MockType<Repository<any>>;
export declare const MockDataSource: () => MockType<DataSource>;
export declare const repositoryMockFactoryDepre: () => MockType<Repository<any>>;
