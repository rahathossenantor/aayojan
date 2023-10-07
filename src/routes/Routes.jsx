import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>
    }
])

export default router;
