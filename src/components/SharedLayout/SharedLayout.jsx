import { Outlet,Link } from "react-router-dom";
import { Suspense, lazy } from "react";
// import Header from "components/Header/Header";
// import { Header } from "./Header/Header";

const Header = lazy(() => import("../Header/Header"));

const SharedLayout = () => { 

    return (
        <>
            <Link to="/"><Header /></Link>
            <Suspense >
                <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;