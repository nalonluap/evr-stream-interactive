const bunyan = require("bunyan");
const path = require("path");
const fs = require("fs");


if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'logs'));
}



var log = bunyan.createLogger({
    name: "NodeLoger",
    serializers: {
        req: bunyan.stdSerializers.req,
        res: bunyan.stdSerializers.res
    },
    streams: [
        {
            level: 'info',
            path: `${path.resolve(__dirname, '..', 'logs', 'NodeLog.log')}`

        },
        {
            level: 'error',
            path: `${path.resolve(__dirname, '..', 'logs', 'NodeError.log')}`
        }
    ]
});

module.exports = log;