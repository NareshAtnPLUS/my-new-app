import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { API_VERSION } from './static/version';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(response=>{
      // console.log(response)
      return {message:response.payload,version:response.version,metaData:{
        length:Array.isArray(response.payload)?response.payload.length:undefined
      }}
    }));
  }
}
