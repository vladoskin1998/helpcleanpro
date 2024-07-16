import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
      origin: ['http://localhost:5000',
        'http://localhost:3000', 
        'https://helpcleanpro.com',
        'https://www.helpcleanpro.com',
      ], 
    }
  );
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix("api");
  await app.listen(process.env.APP_PORT || 5000, () =>
    console.log('Server started on port ' + process.env.APP_PORT || 5000),
  );
}
bootstrap();
