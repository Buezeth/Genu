import Image from "next/image";
import React from "react";

const LogoName = () => {
  return (
    <div className="mb-5">
      <Image src={"/genu-logo.png"} width={418} height={56} alt="Genu Logo" />
    </div>
  );
};

export default LogoName;
