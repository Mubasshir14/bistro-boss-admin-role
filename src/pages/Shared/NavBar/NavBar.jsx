
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .then(error => {
                console.log(error.message);
            })
    }
    const navOptions =
        <>
            <li><Link className="" to='/'>HOME</Link></li>
            <li><Link >DASHBOARD</Link></li>
            <li><Link to='/menu'>OUR MENU</Link></li>
            <li><Link to='/order/salad'>ORDER FOOD</Link></li>
            <li><Link to='/secret'>SECRET</Link></li>
            <li> <p className="block md:hidden">
                <Link to='/' className="btn hover:scale-105 duration-5000 transition-all ">
                    <FaShoppingCart className="text-lg text-[#CD9003]" />
                    <div className="badge bg-[#CD9003] border-none text-white">+0</div>
                </Link>
            </p></li>

            {/* <li>
                <Link to='/'>
                    <button className="btn">
                        <FiShoppingCart/>
                        <div className="badge  badge-secondary">+{cart.length}</div>
                    </button>
                </Link>
            </li>
            {
                user ? <>
                    <li><span>{user?.displayName}</span></li>
                    <li><img className="rounded-full w-20 h-20" src={user?.photoURL} alt="" /></li>
                    <button onClick={handleLogOut} className="btn-ghost">LOG OUT</button></> : <><li><Link to='/login'>LOG IN</Link></li></>
            } */}

        </>
    return (
        <>
            <div className="navbar max-w-screen-xl bg-black text-white fixed z-10 bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-[#CD9003] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className=" md:text-2xl text-xs font-extrabold font-cinzel">BISTRO BOSS <br /> <span className="md:text-xl text-xs font-bold">R E S T A U R A N T</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-[#CD9003] menu-horizontal px-1 font-bold ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {/* {
                        user ? <>
                            <li><span>{user?.displayName}</span></li>
                            <li><img className="rounded-full w-20 h-20" src={user?.photoURL} alt="" /></li>
                            <button onClick={handleLogOut} className="btn btn-ghost">LOG OUT</button></> : <><li><Link className="btn" to='/login'>LOG IN</Link></li></>
                    } */}
                    <Link to='/dashboard/cart' className="hidden md:flex items-center gap-1 teLinkxt-white mr-1 border-2 p-2 rounded-lg hover:scale-105 duration-5000 transition-all  md:mr-2">
                        <FaShoppingCart className="text-lg" />
                        <div className="badge bg-[#CD9003] border-none text-white">+{cart.length}</div>
                    </Link>

                    {
                        user ? <>

                            <div className="relative inline-block">
                                {/* Dropdown toggle button */}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="relative z-10 flex items-center p-2 text-sm  border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring text-white bg-[#CD9003] focus:outline-none"
                                >
                                    <span className="">View Profile</span>
                                    <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                                    </svg>
                                </button>

                                {/* Dropdown menu */}
                                {isOpen && (
                                    <div
                                        onClick={() => setIsOpen(false)}
                                        className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                                    >
                                        <Link

                                            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            <img
                                                className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                                src={user?.photoURL}
                                                alt="jane avatar"
                                            />
                                            <div className="mx-1">
                                                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user?.displayName}</h1>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                                            </div>
                                        </Link>

                                        <hr className="border-gray-200 dark:border-gray-700" />
                                        {/* <p
                                           
                                            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            {user?.displayName}
                                        </p> */}

                                        <p
                                            onClick={handleLogOut}
                                            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            Sign Out
                                        </p>
                                    </div>
                                )}
                            </div>
                        </> : <><li><Link className="bg-[#CD9003] p-2 rounded-lg md:p-4 hover:btn duration-1500" to='/login'>LOG IN</Link></li></>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;