import { Helmet } from "react-helmet-async";
import Cover from "../Share/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=>item.category === "dessert");
    const soup = menu.filter(item=>item.category === "soup");
    const salad = menu.filter(item=>item.category === "salad");
    const pizza = menu.filter(item=>item.category === "pizza");
    const offered = menu.filter(item=>item.category === "offered");

    return (
        <div>
             <Helmet><title>BISTRO BOSS | HOME</title></Helmet>
             
            <Cover img={menuImg} title='our menu'></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="TODAY'S OFFER"></SectionTitle>
           {/* offered menu item  */}
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title='dessert' coverImg={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title='salad' coverImg={saladImg}></MenuCategory>
            <MenuCategory items={soup} title='soup' coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;