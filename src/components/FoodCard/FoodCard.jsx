
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="rounded-lg absolute right-0 mr-4 mt-4 p-3 bg-slate-700 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="uppercase btn btn-outline border-0 border-b-4 mt-4">ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;