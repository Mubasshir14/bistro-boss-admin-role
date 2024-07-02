const MenuItem = ({ item }) => {
    const styles = {
        borderRadius: '0px 200px 200px 200px',
    };
    const { name, image, price, recipe } = item;
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-5">
            <img style={styles} className="w-full md:w-[120px]" src={image} alt="" />
            <div className="flex-grow">
                <h3 className="uppercase font-cinzel text-xl text-[#151515]">{name}------</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl font-cinzel self-start md:self-auto">${price}</p>
        </div>
    );
};

export default MenuItem;
