// #region imports
    // #region libraries
    import {
        Application,
    } from 'express';
    // #endregion libraries
// #endregion imports



// #region module
export type DataQLMiddleware = (
    application: Application,
) => Promise<void>;


export interface DataQLGatewayService {
    name: string;
    address: string;
}

export type DataQLGatewayServices = (string | DataQLGatewayService)[];

export interface DataQLGatewayOptions {
    path?: string;
    services: DataQLGatewayServices;
    middleware?: DataQLMiddleware;
}



export type DataQLResolver = (
    input: any,
    context: any,
) => Promise<any>;

export interface DataQLServiceOptions {
    path?: string;
    pieces: string[];
    resolvers: DataQLResolver[];
    middleware?: DataQLMiddleware;
}
// #endregion module
