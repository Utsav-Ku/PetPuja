import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    let btnName = "Login";

    const onlineStatus = useOnlineStatus();

    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className='flex justify-between bg-pink-200 shadow-lg m-0.5 items-center sm:bg-yellow-200 lg:bg-slate-200'>
            <div className='logo w-56 items-center pl-4'>
                {/* { <img src='https://static.vecteezy.com/system/resources/previews/021/953/308/original/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg' /> } */}
                <h1 className="">PetPuja</h1>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ?  '🟢' : '🔴' }</li>
                    <li className="px-4"><Link to="/">Home</Link> </li>
                    <li className="px-4"><Link to= "/about">About Us</Link></li>
                    <li className="px-4"><Link to= "/contact">Contact Us</Link> </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") } >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;