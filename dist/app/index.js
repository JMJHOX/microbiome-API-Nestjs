"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const microbiome_1 = require("../modules/microbiome");
const typeorm_1 = require("typeorm");
const auth_1 = require("../modules/auth");
const database_1 = require("../modules/database");
const user_1 = require("../modules/user");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    APP_PORT: Joi.number(),
                    APP_PREFIX: Joi.string(),
                    APP_SITE_TITLE: Joi.string(),
                    APP_SITE_URL: Joi.string(),
                    APP_CONTACT_ADDRESS: Joi.string(),
                    APP_CONTACT_CITY: Joi.string(),
                    APP_CONTACT_STATE_ABBR: Joi.string(),
                    APP_CONTACT_STATE: Joi.string(),
                    APP_CONTACT_POSTAL_CODE: Joi.string(),
                    APP_CONTACT_URL: Joi.string(),
                    APP_UNSUBSCRIBE_URL: Joi.string(),
                    APP_UNSUBSCRIBE_PREFERENCES_URL: Joi.string(),
                    DB_HOST: Joi.string(),
                    DB_PORT: Joi.number(),
                    DB_USERNAME: Joi.string(),
                    DB_PASSWORD: Joi.string().allow(''),
                    DB_NAME: Joi.string(),
                }),
            }),
            database_1.DatabaseModule,
            user_1.UserModule,
            auth_1.AuthModule,
            microbiome_1.MicroBiomeModule
        ],
        controllers: [controllers_1.AppController],
        providers: [services_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=index.js.map