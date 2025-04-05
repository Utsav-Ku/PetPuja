import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    //Local State Variable - super powerful variable
    // const arr = useState([]);
    // const [ listOfResturants, setListOfResturants ] = arr; Destructuring the array
    // const listOfResturants = arr[0];
    // const setListOfResturants = arr[1]; Destructuring the array

    const [ listOfResturants, setListOfResturants ] = useState([
        {
            name: "John",
            cuisine: "Fast Food",
            rating: 3.8,
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
    ]);

    //Normal JS Variable
    let listOfResturantsJS = [
        {
            name: "John",
            cuisine: "Fast Food",
            rating: 3.8,
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
    ];

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" 
                    onClick={() => {
                        //filter logic here
                        const filteredList = listOfResturants.filter((res) => res.rating > 4);
                        setListOfResturants(filteredList);
                    }}>
                    Top Rated Resturants
                </button>
            </div>
            <div className='res-container'>
                {
                    listOfResturants.map((restaurant) => (
                        <ResturantCard key={restaurant.id} restaurant={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;