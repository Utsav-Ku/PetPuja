import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {

    const { resId } = useParams();

    const resInfo = useResturantMenu(resId);

    if(resInfo === null){
        <Shimmer />
    }

    if(resInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards;
    console.log(itemCards);

    return (
        <div className= "menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {(itemCards || []).map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li> 
                ))}
            </ul>
        </div>
    )
}

export default ResturantMenu;