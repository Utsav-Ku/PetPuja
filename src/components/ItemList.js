import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an Action
        dispatch(addItem(item));
    }

    return (
       <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2  border-slate-300 border-b-1 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - 💲{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-2 rounded-lg">
                        <div className="absolute">
                            <button onClick={() => handleAddItem(item)} className="p-2 mx-10 rounded-lg bg-black text-white shadow-lg" >Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-lg" />
                    </div>
                </div>
            ))}
       </div>
    )
}

export default ItemList;