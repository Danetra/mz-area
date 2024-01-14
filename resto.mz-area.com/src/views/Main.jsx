import { Route, Routes } from "react-router-dom";

const Main = () => {
    return (
        <div className="w-[100vw] h-[100vh] max-w-[100vw] max-h-[100vh] overflow-hidden">
            <ToastContainer />
            <Routes>
                <Route element={<Login />} path={ROUTES.LOGIN} exact />
                <Route
                    element={<PrivateRoute children={<Dashboard />} />}
                    path={ROUTES.ADMIN.DASHBOARD}
                    exact
                />
                <Route
                    element={<PrivateRoute children={<Berita />} />}
                    path={ROUTES.ADMIN.NEWS.LIST}
                    exact
                />
                <Route
                    element={<PrivateRoute children={<TambahBerita />} />}
                    path={ROUTES.ADMIN.NEWS.ADD}
                    exact
                />
            </Routes>
        </div>
    )
}