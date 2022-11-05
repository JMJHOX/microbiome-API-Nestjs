"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const express = require("express");
const express_rate_limit_1 = require("express-rate-limit");
const helmet_1 = require("helmet");
const morgan = require("morgan");
const typeorm_1 = require("typeorm");
const typeorm_transactional_cls_hooked_1 = require("typeorm-transactional-cls-hooked");
const filters_1 = require("./common/filters");
const app_1 = require("./app");
const strategies_1 = require("./modules/database/strategies");
const entities_1 = require("./modules/user/entities");
const swagger_1 = require("./common/utils/swagger");
async function bootstrap() {
    (0, typeorm_transactional_cls_hooked_1.initializeTransactionalContext)();
    (0, typeorm_transactional_cls_hooked_1.patchTypeORMRepositoryWithBaseRepository)();
    const app = await core_1.NestFactory.create(app_1.AppModule, new platform_express_1.ExpressAdapter(), { cors: true });
    const configService = app.get(config_1.ConfigService);
    app.setGlobalPrefix(configService.get('APP_PREFIX'));
    app.enable('trust proxy');
    const ormdbconfig = {
        name: 'default',
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        namingStrategy: new strategies_1.SnakeNamingStrategy(),
        entities: [
            entities_1.UserEntity,
            entities_1.UserAuthEntity,
        ],
        migrations: ["dist/migration/**/*.js"],
        migrationsRun: true,
        synchronize: false,
        logging: true,
    };
    const AppDataSource = new typeorm_1.DataSource(ormdbconfig);
    AppDataSource.initialize()
        .then(() => {
        console.log("Data Source has been initialized!");
    })
        .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
    app.use(cookieParser());
    app.use((0, helmet_1.default)());
    app.use((0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000,
        max: 200,
    }));
    app.use(compression());
    app.use(express.json({ limit: '5mb' }));
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('combined'));
    const reflector = app.get(core_1.Reflector);
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalFilters(new filters_1.HttpExceptionFilter(reflector), new filters_1.QueryFailedFilter(reflector));
    if (configService.get('APP_ENV') !== 'production') {
        (0, swagger_1.setupSwagger)(app);
    }
    const portApp = process.env.PORT || configService.get('APP_PORT');
    await app.listen(portApp);
    common_1.Logger.log(`Application is running on: ${(await app.getUrl()).removeSlashAtEnd + '/'}${configService.get('APP_PREFIX')}, 
    PORT API ${portApp} PORT 2:  ${process.env.PORT}`, 'InstanceLoader');
}
void bootstrap();
//# sourceMappingURL=main.js.map