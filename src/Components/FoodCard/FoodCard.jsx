

const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="image" className="relative"/></figure>
            <div className="card-body">
                <h2 className="text-2xl text-center">{name}</h2>
                <p className="absolute top-6 right-6 bg-black p-2 text-white rounded-xl">${price}</p>
                <p className="text-lg font-thin">{recipe}</p>
                <div className="mt-5 text-center">
                    <button className="btn btn-outline border-yellow-600 text-yellow-600 border-0 border-b-4 hover:bg-black">Add to Chart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;