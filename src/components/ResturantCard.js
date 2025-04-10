import { CDN_URL } from "../utils/constants";

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
          src={CDN_URL + cloudinaryImageId}
          className="restaurant-img"
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