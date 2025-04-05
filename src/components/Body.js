import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

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

export default Body;