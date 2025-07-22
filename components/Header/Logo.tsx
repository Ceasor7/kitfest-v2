import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <Image
        src="/images/KITFest-Full-White-Logo.png"
        alt="KITFest white logo"
        width={130}
        height={100}
      />
    </Link>
  );
};

export default Logo;
