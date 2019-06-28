import Axios, { AxiosInstance } from 'axios';

/**
 * Constructor options
 */
interface SellyProductsOptions {
    email: string;
    apiKey: string;
}

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
    protected getPage(page: number = 1) {
        return this.API.get('/products', { params: { page } }).then((response) => response.data);
    }

}