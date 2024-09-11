import Productcard from "@/components/ui/Productcard";
import { getCollectionDetail } from "@/lib/actions/action";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetail = await getCollectionDetail(params.collectionId);
  

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={collectionDetail.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-center object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">
        {collectionDetail.title}
      </p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
        {collectionDetail.description}
      </p>
      <div className="flex flex-wrap gap-16 justify-center">
        {collectionDetail.products.map((product: ProductType) => (
          <Productcard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default CollectionDetails;

