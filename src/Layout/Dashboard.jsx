import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="md:w-64 min-h-screen bg-orange-400">
                <ul className="menu p-3">
                    {
                        isAdmin?<>
<li>
                        <NavLink to='/dashboard/adminHome'>
                            <FaHome></FaHome>
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItem'>
                            <FaUtensils></FaUtensils>
                            Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItem'>
                            <FaList></FaList>
                            Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageBooking'>
                            <FaBook></FaBook>
                            Manage Booking
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'>
                            <FaUsers></FaUsers>
                            All users
                        </NavLink>
                    </li>
                        </>
                        :
                        <>
<li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd></FaAd>
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking'>
                            <FaList></FaList>
                            Booking
                        </NavLink>
                    </li>
                        </>
                    }
                    
                </ul>
                <div className="divider"></div>
                <ul className="menu p-3">
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaEnvelope></FaEnvelope>
                            contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;