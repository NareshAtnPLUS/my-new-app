import { RequestMethod, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';
import { WinstonLogConfigObject } from './logger';
import morganMiddleware from './logger/morganMiddleware';
import { API_VERSION } from './static/version';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableVersioning({type:VersioningType.URI,defaultVersion:'1'})
  app.setGlobalPrefix(`/api/${API_VERSION}`,{exclude:[{path:'health',method:RequestMethod.GET}]})
  app.use(morganMiddleware)
  await app.listen(4800);
  console.log(`Server started running on http://localhost:${4800}`)
}
bootstrap();
