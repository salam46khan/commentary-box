import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <p>this is home page</p>
            },
            {
                path: '/about',
                element: <p>About page</p>
            }
        ]
    }
])

export default Routes;