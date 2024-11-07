export enum AppRoutes {
    LANDING = 'landing'
}

export const getRouteLanding = () => '/';

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.LANDING]: getRouteLanding()
}