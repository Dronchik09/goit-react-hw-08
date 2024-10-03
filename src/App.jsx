import css from "./App.module.css";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";


const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  

  return isRefreshing ? (
    <p>Please wait, the data is refreshing...</p>
  ) : (
    <div className={css.container}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <div>
      </div>
    </div>
  );
}