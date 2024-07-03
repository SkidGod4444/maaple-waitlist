import Image from "next/image";

export function Logo() {
  return (
    <div className="flex text-xl font-bold justify-center items-center">
      <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
      <span className="whitespace-nowrap ml-2">Mapple</span>
    </div>
  );
}
