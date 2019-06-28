import CreateCLI from './CreateCLI';
import Chalk from 'chalk';

CreateCLI().then((products) => {
    console.log('\n');
    console.log(Chalk.greenBright(`Successfully downloaded all ${Chalk.yellowBright(products.length.toLocaleString())} products from Selly.io!`));
    console.log(Chalk.greenBright('Check the current directory for your products. \n'));
}).catch((error) => {
    console.error(Chalk.bgRed(error.message));
    process.exit(1);
});
