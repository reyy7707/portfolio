import { Routes, Route } from "react-router-dom";
import { RouterConfig } from "../config/router.config";
import { Suspense } from "react";
import { Layout } from "@/widgets/layouts";
import { PrivateRoute } from "@/shared/ui/private-route";
import { getRouteLanding } from "@/shared/const/router";

const RouterApp = () => {
    return (
        <Routes>
            {Object.values(RouterConfig).map((route) => (
                <Route path={route.path} key={route.path} element={
                    <Layout>
                        <Suspense key={'loading...'}>{
                            route.private
                                ? <PrivateRoute element={route.element} redirectPath={getRouteLanding()} />
                                : route.element}
                        </Suspense>
                    </Layout>
                } />
            ))}
        </Routes>
    )
}

export default RouterApp