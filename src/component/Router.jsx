import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminLayout, MainLayout } from "../pages/Layout";
import Admin from "../pages/Admin";
import MyLoader from "./PageLoader";
import ErrorBoundary from "./ErrorBoundry";

const Home = lazy(() => import("../pages/Home"));
const CoinDetails = lazy(() => import("../pages/CoinDetails"));

const Router = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<MyLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/details/:coinId"
            element={
              <Suspense fallback={<MyLoader />}>
                <CoinDetails />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default Router;
