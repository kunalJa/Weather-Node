const yargs = require('yargs');
const fs = require('fs');

const scripts = require('./scripts.js');

const argv = yargs
  .options({
    address: {
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    },
    default: {
      alias: 'd',
      describe: 'Set the deafult location',
      string: true
    }
  })
  .help().alias('help', 'h')
  .argv;

if (argv.a) {
  scripts.getWeatherPromise(argv.address);
} else if (argv.d) {
  fs.writeFileSync('defaultData.json', argv.default);
} else {
  const defaultData = scripts.getDefaults();
  if (defaultData) {
    scripts.getWeatherPromise(defaultData);
  } else {
    console.log('You did not set a default location, do so with the -d flag.');
  }
}
