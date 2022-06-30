import { Injectable } from '@nestjs/common';
import { cpus, freemem, totalmem } from 'os';

@Injectable()
export class AppService {
  getHello(): any {
    return {payload:'Hello World! from Naresh Next App'};
  }
  getHealth(){
    return {payload:{
      cpus:cpus(),
      totalMemory:totalmem(),
      freeMemory:freemem()
    }}
  }
}
