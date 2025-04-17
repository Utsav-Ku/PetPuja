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
    <div className="m-4 p-4  w-[300px] h-[550px] bg-slate-200 shadow-lg rounded-lg hover:bg-slate-300">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="restaurant-img rounded-lg"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

//Higher Order Component
//input => resturant card => ResutrantCard Promoted

export const withPromotedLabel = (ResutrantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg p-1 m-2">Promoted</label>
        <ResutrantCard {...props} />
      </div>
    )
  }
}

export default ResturantCard;