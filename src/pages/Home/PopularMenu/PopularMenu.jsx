
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";



const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
           
    // const [menu, setMenu] = useState([]);

    // useEffect( () =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    // } ,[])
    return (
        <section className=" mb-12 md:mb-24 max-w-screen-xl mx-auto">
            <SectionTitle heading="From Our Menu" subHeading="---Check it Out---"></SectionTitle>

            <div className="grid md:grid-cols-2  gap-6 mt-10 ">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-4">
                <button className="btn border-t-1 border-r-1 border-l-1 border-b-4 border-b-black bg-transparent outline-none text-black">See More</button>
            </div>
        </section>
    );
};

export default PopularMenu;