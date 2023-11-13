import { Helmet } from "react-helmet-async";
import SharedCover from "../../../Shared/Cover/SharedCover";
import menuBgImg from '../../../assets/menu/banner3.jpg'
import dessertBgImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBgImg from '../../../assets/menu/pizza-bg.jpg'
import saladBgImg from '../../../assets/menu/salad-bg.jpg'
import soupBgImg from '../../../assets/menu/soup-bg.jpg'
import PopularItems from "../../Home/PopularItems/PopularItems";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "dessert");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant | Our Menu</title>
            </Helmet>

            {/* main cover */}
            <SharedCover
                img={menuBgImg}
                title={'Our Menu'}
            ></SharedCover>
            
            {/* Offered menu items */}
            <SectionTitle subHeading="Don't Miss" heading="Todays's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory items={dessert} coverImg={dessertBgImg} title="dessert"></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory items={pizza} coverImg={pizzaBgImg} title="pizza"></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory items={salad} coverImg={saladBgImg} title="salad"></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory items={soup} coverImg={soupBgImg} title="soup"></MenuCategory>
            
        </div>
    );
};

export default Menu;