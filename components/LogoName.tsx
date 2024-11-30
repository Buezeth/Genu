import Image from "next/image";

const LogoName = ({
  imageRef,
}: {
  imageRef: React.ForwardedRef<HTMLInputElement>;
}) => {
  return (
    <div ref={imageRef} className="my-5">
      <Image
        src={"/genu-logo.png"}
        width={418}
        height={56}
        alt="Genu Logo"
        className="max-w-[300px] md:max-w-[418px]"
      />
    </div>
  );
};

export default LogoName;
