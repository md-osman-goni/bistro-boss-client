import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {

    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')

    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;