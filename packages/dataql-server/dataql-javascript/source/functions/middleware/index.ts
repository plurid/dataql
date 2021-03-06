// #region imports
    // #region libraries
    import {
        Application,
    } from 'express';

    import {
        json as jsonParser,
    } from 'body-parser';

    import cookieParser from 'cookie-parser';
    // #endregion libraries


    // #region external
    import {
        DataQLMiddleware,
    } from '~data/interfaces';

    import {
        PAYLOAD_LIMIT,
    } from '~data/constants';
    // #endregion external
// #endregion imports



// #region module
const middleware = async (
    application: Application,
    customMiddleware: DataQLMiddleware | undefined,
) => {
    if (customMiddleware) {
        await customMiddleware(application);
        return;
    }

    application.use(
        cookieParser(),
        jsonParser({
            limit: PAYLOAD_LIMIT,
        }),
    );
}
// #endregion module



// #region exports
export default middleware;
// #endregion exports
