const express = require('express');

const {
    generateService,
} = require('../distribution');



const main = async () => {
    const app = express();

    await generateService(
        app,
        {
            pieces: [
                `
                    getProduct(InputGetProduct): ResponseGetProduct
                    setProduct(InputSetProduct): ResponseGetProduct

                    Product {
                        id: string
                        name: string
                        price: number
                    }

                    InputGetProduct = From<
                        Product,
                        id | name
                    >

                    InputSetProduct = From<
                        Product,
                        name | price
                    >

                    ResponseGetProduct = Product
                `,
            ],
            resolvers: {
                getProduct: async (
                    input,
                    context,
                ) => {
                    return {
                        id: 'one',
                        name: 'deserver',
                        price: 100,
                    };
                },
                setProduct: async (
                    input,
                    context,
                ) => {
                    return {
                        id: 'one',
                        name: 'deserver',
                        price: 100,
                    };
                },
            }
        },
    );

    app.listen(55443, () => {
        console.log('dataql service on 55443');
    });
}

main();
