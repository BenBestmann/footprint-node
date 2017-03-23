# Footprint - Node Logger

A simple and small logger for node.js implemented in ES6 using [Winston](https://github.com/winstonjs/winston).

## Installation

```bash
npm install footprint-node
```

## Usage

Simply require the logger in any file you like:

```js
const Logger = require('footprint-node');
```

You can now log any message by calling the `.log(level, message)` method. For example:

```js
Logger.log('info', 'Process started...');
```

### Configuration

The logger is configured using node environment variables.

#### Log Level

```bash
export LOGGER_LEVEL=...
```

*Default: `info`*

Specify the log level the logger should use. This can be set to any of the follwing values:

* error (highest priority)
* warn
* info
* verbose
* debug
* silly (lowest priority)

The higher the priority the more important the message is considered to be, and the lower the corresponding integer priority.


#### Handle Exceptions

```bash
export LOGGER_HANDLE_EXCEPTIONS=...
```

*Default: `true`*

Determines whether the logger should handle uncaught exceptions or not. If set to `true` the logger will catch and log any
uncaught exceptions.

## License

[MIT](https://opensource.org/licenses/MIT)