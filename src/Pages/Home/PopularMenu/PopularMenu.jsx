import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Share/MenuItem/MenuItem";


const PopularManu = () => {
    const [menu, setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category === "popular");
            setMenu(popularItems)
        })
    },[])
    return (
       <section className="mb-16">
         <div>
            <SectionTitle 
        subHeading='Check it out'
        heading='FROM OUR MENU'>
        </SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
       </section>
    );
};

export default PopularManu;