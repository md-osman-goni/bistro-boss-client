
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItem/MenuItems";
import useMenu from "../../../Hooks/useMenu";


const PopularItems = () => {

    const [menu] = useMenu();
    const popular = menu.filter( item => item.category === 'popular')

    return (
        <section className="my-10">
            <SectionTitle
                subHeading={'Check our popular items'}
                heading={'Form our menu'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 pb-10">
                {
                    popular.map(item => <MenuItems 
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            
        </section>
    );
};

export default PopularItems;