
const MenuItems = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="flex gap-5">
            <img className="w-[120px] h-[100px] rounded-r-full rounded-b-full" src={image} alt="" />
            <div className="flex">
                <div>
                    <h3 className="uppercase text-2xl font-semibold">{name}----------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-600 font-bold">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;