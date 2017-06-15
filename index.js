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
     * @param level Logging level to be used (silly | debug | verbose | info | warn | error).
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

    /**
     * Logs a new message with logging level 'error'.
     *
     * @param message The message to be logged.
     * @param meta Optional meta data that will be attached to the message.
     */

    error(message, meta) {
        this.log('error', message, meta);
    }

    /**
     * Logs a new message with logging level 'warn'.
     *
     * @param message The message to be logged.
     * @param meta Optional meta data that will be attached to the message.
     */

    warn(message, meta) {
        this.log('warn', message, meta);
    }

    /**
     * Logs a new message with logging level 'info'.
     *
     * @param message The message to be logged.
     * @param meta Optional meta data that will be attached to the message.
     */

    info(message, meta) {
        this.log('info', message, meta);
    }

    /**
     * Logs a new message with logging level 'verbose'.
     *
     * @param message The message to be logged.
     * @param meta Optional meta data that will be attached to the message.
     */

    verbose(message, meta) {
        this.log('verbose', message, meta);
    }

    /**
     * Logs a new message with logging level 'debug'.
     *
     * @param message The message to be logged.
     * @param meta Optional meta data that will be attached to the message.
     */

    debug(message, meta) {
        this.log('debug', message, meta);
    }

    /**
     * Logs a new message with logging level 'silly'.
     *
     * @param message The message to be logged.
     * @param meta Optional meta data that will be attached to the message.
     */

    silly(message, meta) {
        this.log('silly', message, meta);
    }

}

/*!
 * Export logger as singleton.
 */

module.exports = new Logger();
