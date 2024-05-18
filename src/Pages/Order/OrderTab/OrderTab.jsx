import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({foodItem}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                foodItem.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;