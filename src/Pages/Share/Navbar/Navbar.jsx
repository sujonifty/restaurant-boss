import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(authContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "LogOut Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => console.log(error))
    }
    const navOptions = <>
        <Link to="/">Home</Link>
        <Link to="/">Contact us</Link>
        <Link to="/">Dashboard</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/order/salad">Order Food</Link>
        <Link to="/secret">secret</Link>
        <Link to="" className="flex justify-center items-center space-x-1">
            <FaShoppingCart />
            <div className="badge badge-secondary">+0</div>
        </Link>

    </>
    return (
        <div className="navbar fixed max-w-screen-xl mx-auto z-30 opacity-70 bg-black text-white ">
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
            <div className="navbar-end mr-5">
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