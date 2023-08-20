import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const swagger = new DocumentBuilder()
    .setTitle('Docs')
    .setDescription('MMA Documentation')
    .setVersion('1.0.0')
    .addTag('MMA Documentation')
    .build();

  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('/docs', app, document);

  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        exposeUnsetFields: false,
      },
    }),
  );

  const config = app.get(ConfigService);
  await app.listen(config.get('port'));
}
bootstrap();
