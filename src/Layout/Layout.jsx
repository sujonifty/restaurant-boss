import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar/Navbar";
import Footer from "../Pages/Share/Footer/Footer";


const Layout = () => {
    const location =  useLocation();
    const isLogin = location.pathname.includes('login');
    return (
        <div>
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
           {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Layout;