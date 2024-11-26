import Image from "next/image";
import React, { ReactNode, Ref, useRef } from "react";

const LogoName = ({
  imageRef,
}: {
  imageRef: React.ForwardedRef<HTMLInputElement>;
}) => {
  return (
    <div ref={imageRef} className="mb-5">
      <Image src={"/genu-logo.png"} width={418} height={56} alt="Genu Logo" />
    </div>
  );
};

export default LogoName;
