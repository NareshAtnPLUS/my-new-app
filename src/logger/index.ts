import winston, { addColors, createLogger } from 'winston';
// import appConfig from '../config/appConfig';
import {loggerColors, levels} from './statics';
import format, {DevFormat} from './format';
import transports, {transportsDev} from './transport';

const level = () => {
  const env = 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};
addColors(loggerColors);
export const WinstonLogConfigObject = {
  level: level(),
  levels,
  format,
  transports,
}
export const WinstonDevLogConfigObject = {
  level: level(),
  levels,
  format: DevFormat,
  transports: transportsDev,
}
const Logger = createLogger(WinstonLogConfigObject);
export const DevLogger = createLogger(WinstonDevLogConfigObject);



export default Logger;
