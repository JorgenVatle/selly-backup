import Commander from 'commander';
import FS from 'fs';
import SellyProducts from './SellyProducts';

const Package = require('../package.json');

export default async () => {
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

    const Selly = new SellyProducts({
        email: Commander.email,
        apiKey: Commander.apikey,
    });

    const products = await Selly.all();

    FS.writeFileSync(`./selly_products_${Date.now()}.json`, JSON.stringify(products));
}