import Commander from 'commander';

const Package = require('../package.json');

export default () => {
    Commander.version(Package.version);

    Commander.option('-e --email', 'Your Selly Email-Address')
        .option('-a --apikey', 'Your Selly API Key')
        .parse(process.argv);

    if (!Commander.email) {
        throw new Error('You need to provide an email address!')
    }

    if (!Commander.apikey) {
        throw new Error('You need to provide an API key!');
    }
}