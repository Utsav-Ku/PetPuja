import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

const ResturantCard = ({restaurant}) => {
    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className='res-logo' 
                alt='res-logo' 
                src={restaurant.image} 
            />
            <h3>{restaurant.name}</h3>
            <h4>{restaurant.cuisine}</h4>
            <h4>{restaurant.rating} stars</h4>
            <h4>{restaurant.deliveryTime}</h4>
        </div>
    )
}

const resList = [
    {
        name: "KFC",
        cuisine: "Fast Food",
        rating: 4.2,
        deliveryTime: "30 minutes",
        image: "https://th.bing.com/th/id/OIP.2rubt7oRrm9ukL2Px8ku6gHaEK?rs=1&pid=ImgDetMain",
        id: "420"
    },
    {
        name: "Meghana Foods",
        cuisine: "Biryani",
        rating: 4.5,
        deliveryTime: "40 minutes",
        image: "https://th.bing.com/th/id/OIP.2rubt7oRrm9ukL2Px8ku6gHaEK?rs=1&pid=ImgDetMain",
        id: "231"
    }
]

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    resList.map((restaurant) => (
                        <ResturantCard key={restaurant.id} restaurant={restaurant} />
                    ))
                }
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