import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    let btnName = "Login";

    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className='header'>
            <div className='logo'>
                {/* <img src='https://static.vecteezy.com/system/resources/previews/021/953/308/original/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg' /> */}
                <h1>PetPuja</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to= "/about">About Us</Link></li>
                    <li><Link to= "/contact">Contact Us</Link> </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") } >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;