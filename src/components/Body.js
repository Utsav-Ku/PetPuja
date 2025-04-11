import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [ filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  //conditional rendering
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value); }} />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
              setSearchText(""); // Optional: clear the input after search
            }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link  key={restaurant.info.id} to={"/resturnant/" + restaurant.info.id}><ResturantCard resData={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
