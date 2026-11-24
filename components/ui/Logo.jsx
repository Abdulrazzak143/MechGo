import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center gap-x-2"> {/* anchor tag wraps both children */}
        <Image
          src="/images/logo.jpg" // Make sure this image exists in public/images
          alt="CampusDine Logo"
          width={50}
          height={50}
          priority
        />
        <span className="text-[3rem] font-dancing font-bold cursor-pointer">
          MechGo
        </span>
      </a>
    </Link>
  );
};

export default Logo;
