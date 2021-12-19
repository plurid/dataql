// #region imports
    // #region libraries
    import {
        Application,
        Request,
        Response,
    } from 'express';
    // #endregion libraries
// #endregion imports



// #region module
export type DataQLMiddleware = (
    application: Application,
) => Promise<void>;

export type DataQLContext = (
    request: Request,
    response: Response,
) => Promise<void>;


export interface DataQLServerBase {
    path?: string;
    middleware?: DataQLMiddleware;
    context?: DataQLContext;
}



export interface DataQLGatewayService {
    name: string;
    address: string;
}

export type DataQLGatewayServices = (string | DataQLGatewayService)[];

export interface DataQLGatewayOptions extends DataQLServerBase {
    services: DataQLGatewayServices;
}



export type DataQLServiceResolver<I = any, C = any, R = any> = (
    input: I,
    context: C,
) => Promise<R> | R;

export type DataQLServiceResolvers<C = any> = Record<string, DataQLServiceResolver<any, C, any>>;

export type DataQLServiceSigns = string | string[];

export interface DataQLServiceOptions<C = any> extends DataQLServerBase {
    signs: DataQLServiceSigns;
    resolvers: DataQLServiceResolvers<C>;
}
// #endregion module
