

const FoodCard = ({item}) => {
    const { image, name, recipe, price, _id } = item;
    return (
        <div>
            <div className="card card-compact  bg-base-200 shadow-xl ">
                    <figure><img src={image} alt="Shoes" className="w-[424px] h-[400px]" /></figure>
                    <h2 className="absolute right-8 top-6 px-5 py-3 rounded-sm text-xl font-semibold bg-[#111827] text-white">${price}</h2>
                    <div className="card-body text-center space-y-4">
                    <h2 className="c text-2xl font-semibold ">{name}</h2>
                    <p className="text-sm font-semibold ">{recipe}</p>
                        <div className="card-actions justify-center mt-2 pb-3">
                        <button className="btn bg-base-300 border-t-0 border-r-0 border-l-0 border-b-4 border-b-[#BB8506] bg-transparent outline-none text-[#BB8506]">Order Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default FoodCard;