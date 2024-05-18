import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    return (
        <section className="featured-item py-12 my-12">
            <SectionTitle
                subHeading='Check it out'
                heading='Featured item'>
            </SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 gap-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="text-white">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>
                        dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        <button className="uppercase btn btn-outline border-0 border-b-4 mt-4">ORDER NOW</button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Featured;