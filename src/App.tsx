import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { Error } from "./components/Error";

import HomePage from "./pages/HomePage";
import InternalHooksPage from "./pages/InternalHooksPage";
import CustomHooksPage from "./pages/CustomHooksPage";
import ReduxThunkActionPage from "./pages/ReduxThunkActionPage";
import ReduxCreateAsyncThunkPage from "./pages/ReduxCreateAsyncThunkPage";

import { Provider } from "react-redux";
import { store } from "./store/store";

import styled from "styled-components";

export default function App() {
    return (
        <ResponsiveWrapper>
            <Provider store={store}>
                <ErrorBoundary fallback={<Error />}>
                    <RouterProvider router={router} />
                </ErrorBoundary>
            </Provider>
        </ResponsiveWrapper>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/internal-hooks",
        element: <InternalHooksPage />,
    },
    {
        path: "/custom-hooks",
        element: <CustomHooksPage />,
    },
    {
        path: "/redux-thunk-actions",
        element: <ReduxThunkActionPage />,
    },
    {
        path: "/redux-create-async-thunk",
        element: <ReduxCreateAsyncThunkPage />,
    },
]);

const ResponsiveWrapper = styled.div`
    @media all and (min-width: 1024px) {
        padding: 0px 40px;
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
        padding: 0px 20px;
    }

    @media all and (max-width: 767px) {
        padding: 0px 10px;
    }
`;
