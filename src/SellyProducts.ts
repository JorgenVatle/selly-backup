import Axios, { AxiosInstance } from 'axios';

const Loading = require('loading-cli');

/**
 * Constructor options
 */
interface SellyProductsOptions {
    email: string;
    apiKey: string;
}

/**
 * Selly product.
 */
type Product = any;

export default class SellyProducts {

    /**
     * Selly API instance
     */
    private readonly API: AxiosInstance;

    /**
     * Selly Product constructor
     */
    public constructor(options: SellyProductsOptions) {
        this.API = Axios.create({
            baseURL: 'https://selly.gg/api/v2/',
            auth: {
                username: options.email,
                password: options.apiKey,
            }
        });
    }

    /**
     * Get products from the given page for the current merchant.
     */
    protected getPage(page: number = 1): Promise<Product[]> {
        return this.API.get('/products', { params: { page } }).then((response) => response.data);
    }

    /**
     * Fetch all products for the current shop.
     */
    public async all() {
        let page: undefined | Array<Product>;
        let result: Array<Product> = [];
        let currentPage = 0;

        const loader = Loading('Downloading product page #1').start();

        while(typeof page === 'undefined' || page.length) {
            page = await this.getPage(currentPage += 1);
            loader.text = `Downloading product page #${currentPage}`;
            result = [...result, ...page];
        }

        loader.stop();

        return result;
    }

}