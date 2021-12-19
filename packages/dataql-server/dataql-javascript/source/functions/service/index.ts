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
const generateService = async (
    application: Application,
    options: DataQLServiceOptions,
) => {
    const servicePath = options.path || defaultDataQLPath;

    await middleware(application);

    application.post(servicePath, async (request, response) => {
        // based on request determine which resolver to call
        const result = {};

        response.json(result);
    });


    return true;
}
// #endregion module



// #region exports
export default generateService;
// #endregion exports
