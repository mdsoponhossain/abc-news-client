import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ContentDetails from "../sharedComponents/contentDetails/ContentDetails";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <ContentDetails></ContentDetails>,
                loader: () => fetch('/news/news.json')
            }
        ]
    }
]);

export default router;