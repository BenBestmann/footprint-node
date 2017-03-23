'use strict';

/*!
 * Module dependencies
 */

const winston = require('winston');
const yn = require('yn');

/**
 * Logger configuration.
 */

const config = {
    level: process.env.LOGGER_LEVEL || 'info',
    handleExceptions: yn(process.env.LOGGER_HANDLE_EXCEPTIONS) || true,
    json: false,
    colorize: true
};

/**
 * Node.js logger using Winston.
 */

class Logger {

    /**
     * Creates a new logger instance.
     */

    constructor() {
        // Prevent winston from emitting errors
        winston.emitErrs = false;
        // Create new winston logger instance and make it log to the console
        this.winston = new winston.Logger({
            transports: [new winston.transports.Console(config)],
            exitOnError: false
        });
    }

    /**
     * Logs a new message to the console.
     *
     * @param level Logging level to be used (silly | debug | info | warn | error).
     * @param message The message to be logged.
     * @param meta Optional meta data that will be attached to the message.
     */

    log(level, message, meta) {
        if(meta) {
            this.winston.log(level, message, meta);
        } else {
            this.winston.log(level, message);
        }
    }

}

/*!
 * Module exports
 */

module.exports = new Logger();
