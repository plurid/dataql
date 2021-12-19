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
        DataQLGatewayService,
    } from '~data/interfaces';

    import middleware from '~functions/middleware';
    // #endregion external
// #endregion imports



// #region module
const getServiceMap = async (
    service: string | DataQLGatewayService,
) => {
    const serviceAddress = typeof service === 'string'
        ? service
        : service.address;

    // call serviceAddress and get the map

    return {};
}


const composeServicesMap = async (
    services: DataQLGatewayServices,
) => {
    const servicesMap: any[] = [];

    for (const service of services) {
        const serviceMap = await getServiceMap(service);
        servicesMap.push(serviceMap);
    }

    return servicesMap;
}


const generateGateway = async (
    application: Application,
    options: DataQLGatewayOptions,
) => {
    const gatewayPath = options.path || defaultDataQLPath;
    const servicesMap = await composeServicesMap(options.services);

    await middleware(
        application,
        options.middleware,
    );

    application.post(gatewayPath, async (request, response) => {
        try {
            // based on request determine which service(s) to call
            // compose result from all the called services
            const result = {};

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
export default generateGateway;
// #endregion exports
