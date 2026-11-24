import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";
import Link from "next/link"; // Import Link

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Your Roadside Lifesaver</Title>
            <p className="text-sm sm:w-2/5 w-full">
              ✅ 24/7 Availability
              ✅ Quick Response Time
              ✅ Trusted Mechanics & Fuel Partners
              ✅ Affordable, Transparent Pricing
                </p>
            <Link href="/menu">
              <button className="btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">MechGo — Your Roadside Lifesaver</Title>
            <p className="text-sm sm:w-2/5 w-full">
              When your vehicle stops, we start. MechGo is your reliable on-demand roadside rescue service, offering emergency fuel delivery, flat tire repair, jump starts, towing, and instant mechanic assistance right where you are. No more waiting helplessly on the road with MechGo, help is just a tap away.
            </p>
            <Link href="/menu">
              <button className="btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
