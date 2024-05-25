import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(authContext);
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logOut successfully'))
            .catch((error) => console.log(error))
    }
    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Contact us</NavLink></li>
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order Food</NavLink></li>

    </>
    return (
        <div className="navbar fixed max-w-screen-xl mx-auto z-30 opacity-30 bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu space-x-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">BISTRO BOSS <br /> <small>Restaurant</small></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu space-x-4 menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <button onClick={handleLogOut} className="btn text-base-content">
                                <li>LogOut</li>
                            </button>
                        </>
                        :
                        <>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;