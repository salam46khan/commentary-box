import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <p>heas</p>
            <Outlet></Outlet>
            <p>foot</p>
        </div>
    );
};

export default Main;