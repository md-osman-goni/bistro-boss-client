import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItem/MenuItems";


const PopularItems = () => {

    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
        
    },[])

    return (
        <section className="my-10">
            <SectionTitle
                subHeading={'Check our popular items'}
                heading={'Form our menu'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 pb-10">
                {
                    menu.map(item => <MenuItems 
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            
        </section>
    );
};

export default PopularItems;