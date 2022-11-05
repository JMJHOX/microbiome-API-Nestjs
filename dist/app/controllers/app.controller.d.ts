import { AppService } from '../services';
export declare class AppController {
    private readonly _appService;
    constructor(_appService: AppService);
    welcome(): Promise<string>;
}
