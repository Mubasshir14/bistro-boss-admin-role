import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="bg-fixed featured-item text-white my-20 pt-8 rounded-lg">
            <SectionTitle heading="From Our Menu" subHeading="---Check it Out---"></SectionTitle>

            <div className="md:flex justify-center items-center pt-12 pb-20 px-6 md:px-36 py-8 bg-slate-500 bg-opacity-50 w-full bg-full rounded-b-lg mt-2">
                <div className="w-full md:w-auto">
                    <img className="rounded-lg w-full md:w-auto" src={featured} alt="" />
                </div>
                <div className="md:ml-10 text-white space-y-2 mt-6 md:mt-0">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Your go-to online food store for gourmet delights delivered fresh and fast. Explore our wide range of quality dishes, from artisanal pizzas to decadent pastries, crafted for food lovers like you.</p>
                    <button className="btn border-t-0 border-r-0 border-l-0 border-b-4 border-b-white bg-transparent outline-none text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
