import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center">What Says Our Customer</Title>
      <Slider {...settings}>
        <CustomerItem
          imgSrc="/images/client1.jpeg"
          name="Anjali vora"
          location="Pune"
          review="I was stranded on the highway with no fuel, and MechGo came to my rescue within 20 minutes! The delivery was quick, and the team was very professional. Highly recommend for anyone facing car trouble!"
        />
        <CustomerItem
          imgSrc="/images/client2.jpg"
          name="Rohit Sharma"
          location="Nasik"
          review="Excellent service! My car battery died late at night, and I easily booked a mechanic through the app. The technician arrived promptly and fixed it on the spot. Very reliable and convenient."
        />
        <CustomerItem
          imgSrc="/images/client3.jpeg"
          name="Karan Patel"
          location="Navi mumbai"
          review="Used the fuel delivery service twice, and both times the experience was smooth and hassle-free. Real-time tracking made it easy to know when help would arrive. Great app for emergencies!"
        />
        <CustomerItem
          imgSrc="/images/client4.jpg"
          name="Sneha Roy"
          location="Mumbai"
          review="Affordable and fast! The mechanic was polite and fixed my puncture in no time. MechGo saved my day when I was stuck during office hours. Will definitely use again!"
        />
      </Slider>
    </div>
  );
};

export default Customers;
