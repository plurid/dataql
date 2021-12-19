// #region exports
export interface DataQLOptions {
    headers?: Record<string, string>;
}

export interface DataQLGetOptions<I = any> {
    piece: string;
    input?: I;
}

export interface DataQLSetOptions<I = any> {
    piece: string;
    input?: I;
}

export interface DataQLNetOptions<D = any, I = any> {
    piece: string;
    input?: I;
    executor: (data: D) => void,
}


export type DataQLResponse<D = any> =
    | DataQLResponseError
    | DataQLResponseSuccess<D>;

export interface DataQLResponseError {
    status: false;
}
export interface DataQLResponseSuccess<D = any> {
    status: true;
    data: D;
}
// #endregion exports
