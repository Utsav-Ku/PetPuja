import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {

    const { resId } = useParams();

    const resInfo = useResturantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null){
        <Shimmer />
    }

    if(resInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

    return (
        <div className= "text-center">
            <h1 className= "font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}</p>
            {/* Categories accordian */}
            {categories.map((category, index) => (
                //Controlled Component
                <ResturantCategory 
                    key={category.card.card.title || index}  
                    data={category?.card?.card} 
                    showItems = {index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default ResturantMenu;