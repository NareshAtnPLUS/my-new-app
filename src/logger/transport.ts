import winston,{transports as winstonTransports} from 'winston';
const transports = [
  new winstonTransports.Console(),
  // new winstonTransports.File({
  //   filename: 'logs/error.log',
  //   level: 'error',
  // }),
  // new winstonTransports.File({filename: 'logs/all.log'}),
];
export const transportsDev = [new winstonTransports.Console()];
export default transports;
