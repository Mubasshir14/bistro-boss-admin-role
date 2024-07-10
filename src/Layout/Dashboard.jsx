import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdEmail, MdRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();


    const [isAdmin] = useAdmin();
    return (
        <div className="flex bg-[#F6F6F6]">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4 font-cinzel">
                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to='/dashboard/admminHome'><FaHome /> Admin Home</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/addItems'><FaUtensils /> Add Items</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/manageItems'><FaList /> Manage Items</NavLink>
                            </li>

                            <li>

                                <NavLink to='/dashboard/bookings'><FaBook /> Manage Bookings</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/users'><FaUsers /> All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>

                                    <NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart ({cart.length})</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/reservation'><FaCalendar /> Reservation</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/review'><MdRateReview /> Reviews</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/bookings'><FaList /> My Bookings</NavLink>
                                </li>
                            </>
                    }

                    {/* divider common */}
                    <div className="divider"></div>
                    <li>

                        <NavLink to='/'><FaHome /> User Home</NavLink>
                    </li>
                    <li>

                        <NavLink to='/menu'><IoMdMenu /> User Menu</NavLink>
                    </li>
                    <li>

                        <NavLink to='/order/salad'><FaBagShopping /> Order</NavLink>
                    </li>
                    <li>

                        <NavLink to='/contact'><MdEmail /> Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 px-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;