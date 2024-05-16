

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="flex space-x-2">
                <img className="w-[120px] rounded-[200px] rounded-tl-none" src={image} alt="" />
                <div>
                    <h3 className="uppercase">{name}----------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;