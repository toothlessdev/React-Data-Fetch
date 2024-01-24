import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { createBrowserRouter } from "react-router-dom";

import { Error } from "./components/Error";

import HomePage from "./pages/HomePage";
import InternalHooksPage from "./pages/InternalHooksPage";
import CustomHooksPage from "./pages/CustomHooksPage";

export default function App() {
    return (
        <ErrorBoundary fallback={<Error />}>
            <RouterProvider router={router} />
        </ErrorBoundary>
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
]);
