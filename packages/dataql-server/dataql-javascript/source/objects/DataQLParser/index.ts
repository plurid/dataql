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


    constructor(
        value: string,
    ) {
        this.value = value;
    }


    private parseTokens() {
        const characters = this.value.split('');
        const tokens: Token[] = [];

        for (const character of characters) {
            const singleSign = singleSigns[character];

            if (singleSign) {
                const token: Token = {
                    type: singleSign,
                };
                tokens.push(token);
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
                    tokens.push(token);
                    break;
            }
        }

        return tokens;
    }


    public parse() {
        const tokens = this.parseTokens();
    }
}
// #endregion module



// #region exports
export default DataQLParser;
// #endregion exports
