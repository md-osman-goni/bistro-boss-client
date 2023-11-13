import { Link } from "react-router-dom";
import SharedCover from "../../../Shared/Cover/SharedCover";
import MenuItems from "../../../Shared/MenuItem/MenuItems";


const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className="pt-8">
            {title && <SharedCover
                img={coverImg}
                title={title}
            ></SharedCover>}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center mb-10">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;