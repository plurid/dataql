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

        for (const character of characters) {
            switch (character) {
                case '(':
                    break;
                case ':':
                    break;
                case '{':
                    break;
                case '=':
                    break;
                case '<':
                    break;
                case '&':
                    break;
                case '|':
                    break;
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
