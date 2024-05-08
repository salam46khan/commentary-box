import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Commentary from "../Pages/Commentary/Commentary";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/commentary',
                element: <Commentary></Commentary>
            }
        ]
    }
])

export default Routes;