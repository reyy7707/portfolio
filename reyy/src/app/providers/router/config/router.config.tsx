import {
    AppRoutes,
    getRouteLanding
} from '@/shared/const/router.ts'

import { RouteProps } from 'react-router-dom'
import { Landing } from '@/features/landing'

interface ExtendedRouteProps {
    private?: boolean;
}

type StaticRouteProps = {
    path?: string | string[];
    element?: React.ReactNode;
    caseSensitive?: boolean;
    children?: React.ReactNode;
    index?: boolean;
    outlet?: string;
} & RouteProps;

type ExtendedStaticRouteProps = StaticRouteProps & ExtendedRouteProps;

export const RouterConfig: Record<AppRoutes, ExtendedStaticRouteProps> = {
    [AppRoutes.LANDING]: {
        path: getRouteLanding(),
        element: <Landing />
    }
}