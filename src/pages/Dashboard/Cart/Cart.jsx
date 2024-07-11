import { FaTrashAlt } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    const totalOrders = cart.length;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch()
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                })
        });
    }

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <div className="mt-32 max-w-4xl mx-auto shadow-md bg-white border border-gray-200">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-6 items-center">
                        <div className="md:text-3xl text-xl font-semibold font-cinzel mb-4 md:mb-0">
                            Total orders: {totalOrders}
                        </div>
                        <div className="md:text-3xl text-xl font-semibold font-cinzel mb-4 md:mb-0">
                            Total price: ${totalPrice.toFixed(2)}
                        </div>
                        {cart.length ? <Link to='/dashboard/payment'>
                            <button className="bg-[#D1A054] font-cinzel text-white px-4 py-2 text-xl rounded">
                                Pay
                            </button>
                        </Link> :
                            <button disabled={!cart.length} className="bg-[#D1A054] font-cinzel text-white px-4 py-2 text-xl rounded">
                                Pay
                            </button>
                        }
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr className="bg-[#D1A054] text-white">
                                    <td className="py-2 px-4 uppercase font-bold">#</td>
                                    <td className="py-2 px-4 uppercase font-bold">Item Image</td>
                                    <td className="py-2 px-4 uppercase font-bold">Item Name</td>
                                    <td className="py-2 px-4 uppercase font-bold">Price</td>
                                    <td className="py-2 px-4 uppercase font-bold">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item._id} className="border-t">
                                        <td className="py-2 px-4 text-[#151515] font-bold">{index + 1}</td>
                                        <td className="py-2 px-4 ">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mx-auto" />
                                        </td>
                                        <td className="py-2 px-4 text-[#737373] ">{item.name}</td>
                                        <td className="py-2 px-4 text-[#737373] ">${item.price.toFixed(2)}</td>
                                        <td className="py-2 px-4 ">
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="bg-[#B91C1C] text-white px-2 py-2 rounded mx-auto">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
