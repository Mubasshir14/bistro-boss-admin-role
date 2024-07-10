import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // console.log(food, user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added To The Cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }
                })
                .catch(error => {
                    console.error("Error adding to cart:", error);
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Failed to add to the cart",
                        text: error.response ? error.response.data.message : error.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            })
            .then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };
    

    return (
        <div>
            <div className="card card-compact bg-base-200 shadow-xl">
                <figure>
                    <img src={image} alt={name} className="w-[424px] h-[400px]" />
                </figure>
                <h2 className="absolute right-8 top-6 px-5 py-3 rounded-sm text-xl font-semibold bg-[#111827] text-white">${price}</h2>
                <div className="card-body text-center space-y-4">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="text-sm font-semibold">{recipe}</p>
                    <div className="card-actions justify-center mt-2 pb-3">
                        <button onClick={handleAddToCart}
                            className="btn bg-base-300 border-t-0 border-r-0 border-l-0 border-b-4 border-b-[#BB8506] bg-transparent outline-none text-[#BB8506]">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
