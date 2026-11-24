import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.jpg" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">Stranded? We’ve Got You Covered — Anytime, Anywhere.</Title>
          <p className="my-5 flex flex-col items-center">
          At MechGo, we understand that breakdowns never come with a warning. Whether you’ve run out of fuel, got a flat tire, or your car just won’t start — our team is ready to bring help to your location, anytime, anywhere. Our mission is simple — to keep you moving safely and stress-free. We combine technology, trained professionals, and fast service to ensure you’re never left stranded again. With MechGo, peace of mind travels with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
