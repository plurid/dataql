// #region imports
    // #region internal
    import {
        TOKENS,
        Token,

        singleSigns,
    } from './data';
    // #endregion internal
// #endregion imports



// #region module
class DataQLParser {
    private value;
    private tokens: Token[] = [];
    private result = {};


    constructor(
        value: string,
    ) {
        this.value = value;
    }


    private parseTokens() {
        const characters = this.value.split('');

        for (const character of characters) {
            const singleSign = singleSigns[character];

            if (singleSign) {
                const token: Token = {
                    type: singleSign,
                };
                this.tokens.push(token);
                continue;
            }

            switch (character) {
                case ' ':
                case '\n':
                case '\t':
                    continue;
                default:
                    const token: Token = {
                        type: TOKENS.IDENTIFIER,
                        value: character,
                    };
                    this.tokens.push(token);
                    break;
            }
        }
    }

    private parseExpressions() {
        for (const token of this.tokens) {
            switch (token.type) {
                case TOKENS.IDENTIFIER:
                    break;
                default:
                    break;
            }
        }
    }

    private computeResult() {
    }


    public parse() {
        this.parseTokens();
        this.parseExpressions();
        this.computeResult();

        return this.result;
    }
}
// #endregion module



// #region exports
export default DataQLParser;
// #endregion exports
