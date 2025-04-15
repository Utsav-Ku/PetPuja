import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [ filteredRestaurants, setFilteredRestaurants] = useState([]);
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurantCards = json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestraunt(restaurantCards || []);
      setFilteredRestaurants(restaurantCards || []); // Initialize filteredRestaurants with the same data
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Looks like you're offline!! Please check your internet connection</h1>
  }

  //conditional rendering
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {setSearchText(e.target.value); }} />
          <button
            className="search-btn px-4 py-1 bg-black m-2 rounded-lg text-white"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
              setSearchText(""); // Optional: clear the input after search
            }}
          >Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 m-2 border rounded-lg bg-black text-white"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
          <Link  key={restaurant.info.id} to={"/resturnant/" + restaurant.info.id}>{ restaurant.info.avgRating > 4.5 ? <ResturantCardPromoted resData={restaurant.info} /> : <ResturantCard resData={restaurant.info} />}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
