import { Link } from "react-router-dom";



const NavBar = () => {

    const navOptions = <>
        <Link to="/"><li className="mr-5">Home</li></Link>
        <Link to="/menu"><li className="mr-5">Our Menu</li></Link>
        <Link to="/order/salad"><li className="mr-5">Order Food</li></Link>
        <Link to="/dashboard"><li className="mr-5">Dashboard</li></Link>
        <Link to="contactUs"><li className="mr-5">Contact Us</li></Link>
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h2 className=" text-2xl uppercase">Bistro Boss</h2>
                    <p>R  e  s  t  a  u  r  a  n  t</p>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;