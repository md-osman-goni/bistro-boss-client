import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Feeatured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white">
            <div className="bg-black bg-opacity-40 py-20">
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'Featured item'}
                ></SectionTitle>

                <div className="flex justify-center items-center gap-5 px-16 py-8">
                    <div>
                        <img className="w-[650px]" src={featuredImage} alt="" />
                    </div>

                    <div className="w-4/5 mr-24">
                        <h3>Aug 20, 2029</h3>
                        <h3 className="capitalize text-2xl">Where can I get some?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4 text-white ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;