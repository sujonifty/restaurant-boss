import Cover from "../../Share/Cover/Cover";
import MenuItem from "../../Share/MenuItem/MenuItem";


const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            
            <div className="grid md:grid-cols-2 gap-10 my-16">
            {
                items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        </div>
    );
};

export default MenuCategory;