const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'calculator-microservice'},
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        // Log errors to error.log file
        new winston.transports.File({filename: 'logs/error.log', level: 'error'}),
        // Log all other logs to combined.log file
        new winston.transports.File({filename: 'logs/combined.log', level: 'info'}),
    ],
});

module.exports = logger;