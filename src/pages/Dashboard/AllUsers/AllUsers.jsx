import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            console.log('Response:', res); return res.data;
        }
    });
    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            axiosSecure.delete(`/users/${user._id}`)
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

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <div className="mt-32 max-w-4xl mx-auto shadow-md bg-white border border-gray-200">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-6 items-center">
                        <div className="md:text-3xl text-xl font-semibold font-cinzel mb-4 md:mb-0">
                            All Users: {users.length}
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr className="bg-[#D1A054] text-white">
                                    <td className="py-2 px-4 uppercase font-bold"></td>
                                    <td className="py-2 px-4 uppercase font-bold">Name</td>
                                    <td className="py-2 px-4 uppercase font-bold">Email</td>
                                    <td className="py-2 px-4 uppercase font-bold">Role</td>
                                    <td className="py-2 px-4 uppercase font-bold">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id} className="border-t">
                                        <td className="py-2 px-4 text-[#151515] fonr-bold">{index + 1}</td>
                                        <td className="py-2 px-4  text-[#737373]">
                                            {user.name}
                                        </td>
                                        <td className="py-2 px-4 text-[#737373] ">
                                            {user.email}
                                        </td>
                                        <td className="py-2 px-4 ">
                                            {
                                                user.role === 'admin' ? 
                                                <button
                                                        
                                                        className="  mx-auto text-[#737373]">
                                                        Admin
                                                    </button>
                                                :
                                                    <button
                                                        onClick={() => handleMakeAdmin(user)}
                                                        className="bg-[#D1A054] text-white px-2 py-2 rounded mx-auto">
                                                        <FaUsers />
                                                    </button>
                                            }
                                        </td>
                                        <td className="py-2 px-4 ">
                                            <button
                                                onClick={() => handleDelete(user)}
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

export default AllUsers;
