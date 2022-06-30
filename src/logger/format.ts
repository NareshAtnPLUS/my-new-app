import winston,{format as winstonFormat} from 'winston';
const format = winstonFormat.combine(
  winstonFormat.timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
  winstonFormat.colorize({all: true}),
  winstonFormat.printf(
    info => `${info.timestamp} ${info.level}: ${info.message}`
  ),
  winstonFormat.label({label: 'Production'})
);
export const DevFormat = winstonFormat.combine(
  winstonFormat.timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
  winstonFormat.colorize({all: true}),
  winstonFormat.printf(
    info => `${info.timestamp} ${info.level}: ${info.message}`
  ),
  winstonFormat.label({label: 'Development'})
);
export default format;
