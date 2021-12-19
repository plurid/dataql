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


export enum TOKENS {
    LEFT_PARANTHESIS, RIGHT_PARANTHESIS,
    LEFT_BRACKET, RIGHT_BRACKET,
    LEFT_BRACE, RIGHT_BRACE,
    LEFT_ANGLE, RIGHT_ANGLE,
    COMMA, DOT, COLON, QUESTION_MARK,
    AND, OR, EQUAL,
    IDENTIFIER,
}

export type Token = {
    type: number;
} | {
    type: TOKENS.IDENTIFIER;
    value: string;
}

export const reservedKeywords = [
    'in',
    'keyof',
    'never',
    'extends',
    'undefined',
];

export const singleSigns: Record<string, Exclude<TOKENS, TOKENS.IDENTIFIER>> = {
    '(': TOKENS.LEFT_PARANTHESIS,
    ')': TOKENS.RIGHT_PARANTHESIS,
    '[': TOKENS.LEFT_BRACKET,
    ']': TOKENS.RIGHT_BRACKET,
    '{': TOKENS.LEFT_BRACE,
    '}': TOKENS.RIGHT_BRACE,
    '<': TOKENS.LEFT_ANGLE,
    '>': TOKENS.RIGHT_ANGLE,
    ',': TOKENS.COMMA,
    '.': TOKENS.DOT,
    ':': TOKENS.COLON,
    '?': TOKENS.QUESTION_MARK,
    '&': TOKENS.AND,
    '|': TOKENS.OR,
    '=': TOKENS.EQUAL,
};
// #endregion module
