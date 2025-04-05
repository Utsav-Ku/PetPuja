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

export default ResturantCard;