// #region imports
    // #region libraries
    import {
        Application,
    } from 'express';
    // #endregion libraries


    // #region external
    import {
        defaultDataQLPath,
    } from '~data/constants';

    import {
        DataQLServiceOptions,
    } from '~data/interfaces';

    import middleware from '~functions/middleware';
    // #endregion external
// #endregion imports



// #region module
const composeServiceMap = async (
    signs: string | string[],
) => {
    return {};
}


const generateService = async (
    application: Application,
    options: DataQLServiceOptions,
) => {
    const {
        signs,
        resolvers,
    } = options;

    const servicePath = options.path || defaultDataQLPath;
    const serviceMap = await composeServiceMap(signs);

    await middleware(
        application,
        options.middleware,
    );


    application.post(servicePath, async (request, response) => {
        try {
            // based on request determine which resolver to call
            // with what input

            const input = '';
            const context = options.context
                ? await options.context(request, response)
                : undefined;

            const resolverName = '';
            const resolver = resolvers[resolverName];
            const result = await resolver(input, context);

            response.json(result);
        } catch (error) {
            response.json({
                status: false,
            });
        }
    });


    return true;
}
// #endregion module



// #region exports
export default generateService;
// #endregion exports
