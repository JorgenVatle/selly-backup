import CreateCLI from './CreateCLI';
import Chalk from 'chalk';

CreateCLI().catch((error) => {
    console.error(Chalk.bgRed(error.message));
    process.exit(1);
});
