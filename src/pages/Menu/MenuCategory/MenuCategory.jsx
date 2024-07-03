import { Link } from "react-router-dom";
import MenuItem from "../../Home/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({ items, title, coverImg, subTitle}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title} subTitle={subTitle} />}
            <div className="grid md:grid-cols-2  gap-6 mt-10 ">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to={`/order/${title}`} className="btn border-t-1 border-r-1 border-l-1 border-b-4 border-b-black bg-transparent outline-none text-black uppercase font-semibold text-xl">Order Your Favourite Food</Link>
            </div>
        </div>
    );
};

export default MenuCategory;