// #region module
export interface DataQLCall {
    name: string;
    input: DataQLTypeAssign;
    result: DataQLTypeAssign;
}

export interface DataQLType {
    name: string;
    fields: DataQLTypeField[];
}


export interface DataQLTypeAssign {
    name: string;
    optional: boolean;
}

export interface DataQLTypeField {
    name: string;
    optional: boolean;
    type: string;
}

export type DataQLTypeFieldPrimitive =
    | 'string' | 'number' | 'boolean';

export const defaultDataQLTypes = `
    Partial<T> = {
        [P in keyof T]?: T[P] | undefined
    }

    Required<T> = {
        [P in keyof T]-?: T[P]
    }

    From<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    Exclude<T, U> = T extends U ? never : T
    Omit<T, K extends keyof L> = {
        [P in Exclude<keyof T, K>]: T[P]
    }
`;
// #endregion module
