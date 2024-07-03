import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/useMenu';
import menuImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../Shared/Cover/Cover';
import dess from '../../../assets/menu/dessert-bg.jpeg';
import pizz from '../../../assets/menu/pizza-bg.jpg'
import sal from '../../../assets/menu/salad-bg.jpg'
import sou from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');

    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS || MENU</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu' subTitle='Would you like to try a dish?' />

            {/* offered */}
            <SectionTitle heading="Today's Offer" subHeading="---Don't Miss---"></SectionTitle>
            <div className=' mb-20'>
                <MenuCategory items={offered}></MenuCategory>
            </div>


            {/* salad */}
            {/* <Cover img={sal} title='Salads' subTitle='Salads are a versatile and healthy dish, often combining fresh vegetables, fruits, proteins, and dressings to create a nutritious and flavorful meal.' /> */}
            <div className=' mb-20 mt-20'>
                <MenuCategory items={salad} title='salad' subTitle='Salads are a versatile and healthy dish, often combining fresh vegetables, fruits, proteins, and dressings to create a nutritious and flavorful meal.' coverImg={sal}></MenuCategory>
            </div>

            {/* pizza */}
            {/* <Cover img={pizz} title='Pizza' subTitle='Pizza is a delicious dish originating from Italy, featuring a baked crust topped with tomato sauce, cheese, and various toppings.' /> */}
            <div className=' mb-20 mt-20'>
                <MenuCategory items={pizza} title='pizza' subTitle='Pizza is a delicious dish originating from Italy, featuring a baked crust topped with tomato sauce, cheese, and various toppings.' coverImg={pizz}></MenuCategory>
            </div>


            {/* soup */}
            {/* <Cover img={sou} title='Soup' subTitle='Soup are a versatile and healthy dish, often combining fresh vegetables, fruits, proteins, and dressings to create a nutritious and flavorful meal.' /> */}
            <div className=' mb-20 mt-20'>
                <MenuCategory items={soup} title='soup' subTitle='Soup are a versatile and healthy dish, often combining fresh vegetables, fruits, proteins, and dressings to create a nutritious and flavorful meal.' coverImg={sou}></MenuCategory>
            </div>


            {/* dessert */}
            {/* <Cover img={dess} title='Desserts' subTitle='A vast expanse of golden sands stretches endlessly beneath the scorching sun, embodying the serene and harsh beauty of the desert.' /> */}
            <div className=' mb-20 mt-20'>
                <MenuCategory items={desserts} title='dessert' subTitle='A vast expanse of golden sands stretches endlessly beneath the scorching sun, embodying the serene and harsh beauty of the desert.' coverImg={dess}></MenuCategory>
            </div>






        </div>
    );
};

export default Menu;