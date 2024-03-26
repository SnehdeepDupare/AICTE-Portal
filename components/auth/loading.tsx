import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
        src="/assets/images/aicteLogo.png"
        alt="logo"
        height={120}
        width={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
