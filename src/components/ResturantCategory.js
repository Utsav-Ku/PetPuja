import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ( {data, showItems, setShowIndex} ) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default ResturantCategory;