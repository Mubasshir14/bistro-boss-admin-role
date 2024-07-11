// import { FaUtensils } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
      
        }
        console.log( 'with image url', res.data);
    };
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center  bg-gray-100 p-4 sm:p-6 lg:p-8">
                <SectionTitle heading="---What's new?---" subHeading="ADD AN ITEM" />
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-full max-w-lg mt-6">
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text text-gray-700">Recipe Name*</span>
                        </div>
                        <input {...register("name", { required: true })} defaultValue={name} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </label>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text text-gray-700">Category*</span>
                            </div>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text text-gray-700">Price*</span>
                            </div>
                            <input {...register("price", { required: true })}  type="number" placeholder="Price" defaultValue={price} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text text-gray-700">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} defaultValue={recipe} className="textarea textarea-bordered w-full" placeholder="Recipe Details"></textarea>
                    </label>

                    <div className="form-control w-full my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full" />
                    </div>

                    <button
                        type="submit"
                        className="w-full my-6 text-white p-2 rounded flex items-center justify-center gap-2"
                        style={{
                            background: 'linear-gradient(90deg, rgb(131, 93, 35), rgb(181, 129, 48) 100%)'
                        }}
                    >
                        Update Item <FaUtensils />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;