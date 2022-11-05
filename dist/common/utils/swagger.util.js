"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const configService = app.get(config_1.ConfigService);
    const options = new swagger_1.DocumentBuilder()
        .setTitle(configService.get('APP_SITE_TITLE') || process.env.npm_package_name)
        .setDescription(configService.get('SWAGGER_API_DESCRIPTION') ||
        process.env.npm_package_description)
        .setVersion(configService.get('SWAGGER_API_VERSION') ||
        process.env.npm_package_version)
        .addTag(configService.get('SWAGGER_API_TAG') || 'API Boilerplate')
        .setContact(configService.get('SWAGGER_API_CONTACT_NAME') ||
        process.env.npm_package_author_name, configService.get('SWAGGER_API_CONTACT_URL') ||
        process.env.npm_package_author_url, configService.get('SWAGGER_API_CONTACT_EMAIL') ||
        process.env.npm_package_author_email)
        .setLicense(configService.get('SWAGGER_API_LICENSE_TYPE') ||
        process.env.npm_package_license, configService.get('SWAGGER_API_LICENSE_URL'))
        .setTermsOfService(configService.get('SWAGGER_API_TOS'))
        .setExternalDoc(configService.get('SWAGGER_API_EXTERNAL_DOCS_TITLE'), configService.get('SWAGGER_API_EXTERNAL_DOCS_URL'))
        .addBearerAuth()
        .build();
    swagger_1.SwaggerModule.setup(configService.get('SWAGGER_API_DOCS_URL'), app, swagger_1.SwaggerModule.createDocument(app, options));
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.util.js.map