// #region exports
export interface DataQLGatewayService {
    name: string;
    address: string;
}

export type DataQLGatewayServices = (string | DataQLGatewayService)[];

export interface DataQLGatewayOptions {
    path?: string;
    services: DataQLGatewayServices;
}



export type DataQLResolver = (
    input: any,
    context: any,
) => Promise<any>;

export interface DataQLServiceOptions {
    path?: string;
    pieces: string[];
    resolvers: DataQLResolver[];
}
// #endregion exports
