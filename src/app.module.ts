import { Logger, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppInterceptor } from './app.interceptor';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService,{provide:APP_INTERCEPTOR,useClass:AppInterceptor}],
})
export class AppModule {}
