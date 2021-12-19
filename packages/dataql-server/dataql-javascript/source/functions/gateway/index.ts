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
        DataQLGatewayOptions,
        DataQLGatewayServices,
    } from '~data/interfaces';

    import middleware from '~functions/middleware';
    // #endregion external
// #endregion imports



// #region module
const composeServicesMap = async (
    services: DataQLGatewayServices,
) => {
    const servicesMap: string[] = [];

    for (const service of services) {

    }

    return servicesMap;
}


const generateGateway = async (
    application: Application,
    options: DataQLGatewayOptions,
) => {
    const gatewayPath = options.path || defaultDataQLPath;
    const servicesMap = await composeServicesMap(options.services);

    await middleware(application);

    application.post(gatewayPath, async (request, response) => {
        // based on request determine which service(s) to call
        // compose result from all the called services
        const result = {};

        response.json(result);
    });


    return true;
}
// #endregion module



// #region exports
export default generateGateway;
// #endregion exports
