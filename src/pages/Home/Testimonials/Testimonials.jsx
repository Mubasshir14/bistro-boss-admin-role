import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import app from '../../../assets/home/app1.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import {  Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-24 max-w-screen-lg mx-auto">
            <SectionTitle heading="TESTIMONIALS" subHeading="---What Our Clients Say---"></SectionTitle>

            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[ Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=" mt-10 text-center flex flex-col justify-center items-center">

                            <Rating
                                style={{ maxWidth: 180, color: '#CD9003' }}
                                value={review.rating}
                                readOnly
                            />
                            <div className="mt-8 h-[84.62px]">
                                <img  src={app} alt="" />
                            </div>
                           
                                <p className="mt-8 mb-4 font-cinzel">{review.details}</p>
                                <h3 className="text-2xl font-bold font-cinzel text-[#CD9003]">{review.name}</h3>
                               
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;