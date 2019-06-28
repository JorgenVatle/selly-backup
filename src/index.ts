import CreateCLI from './CreateCLI';
import Chalk from 'chalk';

try {
    CreateCLI();
} catch (error) {
    console.error(Chalk.bgRed(error.message));
}
