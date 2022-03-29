import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const API_SERVICE_URL = 'https://message-send-app.herokuapp.com/';

  module.exports = function (app) {
    app.use(
      createProxyMiddleware({
        target: API_SERVICE_URL,
        changeOrigin: true,
      }),
    );
  };
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
