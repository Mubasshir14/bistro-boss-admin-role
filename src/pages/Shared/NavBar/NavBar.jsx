
import { Link } from "react-router-dom";



const NavBar = () => {

    const navOptions =
        <>
            <li><Link className="" to='/'>HOME</Link></li>
            <li><Link >DASHBOARD</Link></li>
            <li><Link to='/menu'>OUR MENU</Link></li>
            <li><Link to='/order'>ORDER FOOD</Link></li>
            <li><Link to='/secret'>SECRET</Link></li>
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
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;