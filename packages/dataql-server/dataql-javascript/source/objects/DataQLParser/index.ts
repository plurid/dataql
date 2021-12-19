// #region imports
    // #region internal
    import {
        TOKENS,

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


    public parse() {
        const characters = this.value.split('');
        const tokens = [];

        for (const character of characters) {
            const singleSign = singleSigns[character];

            if (singleSign) {
                const token = TOKENS[singleSign];
                tokens.push(token);
                continue;
            }

            switch (character) {
                case ' ':
                case '\n':
                case '\t':
                    continue;
                default:
                    break;
            }
        }
    }
}
// #endregion module



// #region exports
export default DataQLParser;
// #endregion exports
