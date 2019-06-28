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
        })
    }

}