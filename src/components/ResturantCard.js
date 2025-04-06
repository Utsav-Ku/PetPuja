const ResturantCard = ({ resData }) => {
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="restaurant-logo"
          src={
            cloudinaryImageId
              ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`
              : "https://via.placeholder.com/200x150?text=No+Image"
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
    );
};

export default ResturantCard;