// #region imports
    // #region external
    import DataQLParser from '../index';
    // #endregion external
// #endregion imports



// #region module
describe('DataQLParser:', () => {
    it(`works with simple type`, () => {
        const dataql = `
            Type {
                name string
            }
        `;

        const parser = new DataQLParser(dataql);
        const parsed = parser.parse();
    });


    it(`works with nested typing`, () => {
        const dataql = `
            SomeType {
                someKey {
                    someOtherKey string
                }
            }
        `;

        const parser = new DataQLParser(dataql);
        const parsed = parser.parse();
    });


    it(`works with dot access`, () => {
        const dataql = `
            SomeType {
                someKey {
                    someOtherKey string
                }
            }

            SomeOtherType = SomeType.someKey // { someOtherKey string }
        `;

        const parser = new DataQLParser(dataql);
        const parsed = parser.parse();
    });
});
// #endregion module
