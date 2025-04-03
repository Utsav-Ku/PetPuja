import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                {/* <img src='https://static.vecteezy.com/system/resources/previews/021/953/308/original/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg' /> */}
                <h1>Swiggy</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResturantCard = () => {
    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className='res-logo' 
                alt='res-logo' 
                src='https://th.bing.com/th/id/OIP.2rubt7oRrm9ukL2Px8ku6gHaEK?rs=1&pid=ImgDetMain'
            />
            <h3>Meghana Foods</h3>
            <h4>Biryani, North India, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);