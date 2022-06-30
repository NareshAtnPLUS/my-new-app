import { Logger, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ProductsData } from 'src/data/products.data';
import { AuthGuard } from 'src/guards/auth.guard';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  controllers: [ProductsController],
  providers:[ProductsService,ProductsData,{provide:APP_GUARD,useClass:AuthGuard},Logger]

})
export class ProductsModule {}
