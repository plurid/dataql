// #region imports
    // #region external
    import DataQL from '../index';
    // #endregion external
// #endregion imports



// #region module
describe('DataQL:', () => {
    it(`works`, async () => {
        const endpoint = 'http://localhost:55443/dataql';

        const dataQL = new DataQL(
            endpoint,
        );


        const getRequest = await dataQL.get<{id: string; price: number}>({
            piece: `
                getProduct {
                    id
                    price
                }
            `,
            input: {
                name: 'deserver',
            },
        });
        if (getRequest.status) {
            const {
                id,
                price,
            } = getRequest.data;

            expect(typeof id).toBe('string');
            expect(typeof price).toBe('number');
        }


        const setRequest = await dataQL.set<{name: string; price: number}>({
            piece: `
                setProduct {
                    name
                    price
                }
            `,
            input: {
                name: 'deserver',
                price: 100,
            },
        });
        if (setRequest.status) {
            const {
                name,
                price,
            } = setRequest.data;

            expect(name).toBe('deserver');
            expect(price).toBe(100);
        }
    });
});
// #endregion module
