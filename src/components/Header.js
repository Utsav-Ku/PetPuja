import { useState } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") } >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;