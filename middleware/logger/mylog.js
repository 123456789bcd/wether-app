const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
    level: 'silly',
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'all.log' }),
    ]
})


module.exports = logger