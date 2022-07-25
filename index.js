const moment = require('moment-timezone');

moment.tz.setDefault('America/Los_Angeles');

let targetTimezone;
if(process.argv.length != 3) {
    console.log('something');
    process.exit(1);
} else {
    targetTimezone = process.argv[2];
}

let time = moment.tz(targetTimezone).format();
console.log(time);
