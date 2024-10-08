import Image from "next/image";
import Collection from "@/components/Collection";
import Productlist from "@/components/Productlist";

export default async function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <Collection />
      <Productlist />
    </>
  );  
}
export const dynamic = "force-dynamic";