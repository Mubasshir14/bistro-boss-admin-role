import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'

const ShouldTry = () => {
    return (
        <section className="max-w-screen-lg mx-auto">
            <SectionTitle heading="Chef Recommends" subHeading="---Should Try---"></SectionTitle>


            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card card-compact  bg-base-200 shadow-xl ">
                    <figure><img src={img1} alt="Shoes" className="w-[424px] h-[400px]" /></figure>
                    <div className="card-body text-center space-y-4">
                        <h2 className="c text-2xl font-semibold ">Ceaser Salad</h2>
                        <p className="text-sm font-semibold ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center mt-4 pb-3">
                        <button className="btn bg-base-300 border-t-0 border-r-0 border-l-0 border-b-4 border-b-[#BB8506] bg-transparent outline-none text-[#BB8506]">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-200 shadow-xl ">
                    <figure><img src={img2} alt="Shoes" className="w-[424px] h-[400px]" /></figure>
                    <div className="card-body text-center space-y-4">
                        <h2 className="c text-2xl font-semibold ">Pizza</h2>
                        <p className="text-sm font-semibold ">Savor irresistible pizzas crafted with fresh ingredients and bold flavors – order now for a taste that delights!</p>
                        <div className="card-actions justify-center mt-4 pb-3">
                        <button className="btn bg-base-300 border-t-0 border-r-0 border-l-0 border-b-4 border-b-[#BB8506] bg-transparent outline-none text-[#BB8506]">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-200 shadow-xl ">
                    <figure><img src={img3} alt="Shoes" className="w-[424px] h-[400px]" /></figure>
                    <div className="card-body text-center space-y-4">
                        <h2 className="c text-2xl font-semibold ">Mushroom Soup</h2>
                        <p className="text-sm font-semibold ">Sauté sliced mushrooms in butter, then simmer in vegetable broth with a splash of cream, and season with salt, pepper, and thyme</p>
                        <div className="card-actions justify-center mt-4 pb-3">
                        <button className="btn bg-base-300 border-t-0 border-r-0 border-l-0 border-b-4 border-b-[#BB8506] bg-transparent outline-none text-[#BB8506]">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShouldTry;