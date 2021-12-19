// #region imports
    // #region libraries
    import fetch from 'cross-fetch';
    // #endregion libraries


    // #region external
    import {
        DataQLOptions,
        DataQLGetOptions,
        DataQLSetOptions,
        DataQLNetOptions,
        DataQLResponse,
    } from '~data/interfaces';
    // #endregion external
// #endregion imports



// #region module
class DataQL {
    private endpoint;
    private options;


    constructor(
        endpoint: string,
        options?: DataQLOptions,
    ) {
        this.endpoint = endpoint;
        this.options = this.resolveOptions(options);
    }


    private resolveOptions(
        options?: DataQLOptions,
    ) {
        const resolvedOptions: Required<DataQLOptions> = {
            headers: options?.headers || {},
        };

        return resolvedOptions;
    }


    private async endpointCall<D = any>(
        piece: string,
        input: any,
    ): Promise<DataQLResponse<D>> {
        try {
            const request = await fetch(this.endpoint, {
                method: 'POST',
                headers: this.options.headers,
                body: JSON.stringify({
                    piece,
                    input,
                }),
            });

            if (request.status !== 200) {
                return {
                    status: false,
                };
            }

            const data = await request.json() as D;

            return {
                status: true,
                data,
            };
        } catch (error) {
            return {
                status: false,
            };
        }
    }


    /**
     * Requests a data piece from the `endpoint`.
     *
     * @param options
     * @returns
     */
    public async get<D = any, I = any>(
        options: DataQLGetOptions<I>,
    ) {
        const {
            piece,
            input,
        } = options;

        return this.endpointCall<D>(
            piece,
            input,
        );
    }


    /**
     * Changes a data piece on the `endpoint`.
     *
     * @param options
     * @returns
     */
    public async set<D = any, I = any>(
        options: DataQLSetOptions<I>,
    ) {
        const {
            piece,
            input,
        } = options;

        return this.endpointCall<D>(
            piece,
            input,
        );
    }


    /**
     * Catches changes of a data piece and calls the `executor`.
     *
     * @param options
     * @returns
     */
    public async net<D = any, I = any>(
        options: DataQLNetOptions<D, I>,
    ) {
        const {
            piece,
            input,
            executor,
        } = options;

        return true;
    }
}
// #endregion module



// #region exports
export default DataQL;
// #endregion exports
