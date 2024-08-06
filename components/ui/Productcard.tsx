import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProductCardProps {
  product: ProductType;
}

function Productcard({product}: ProductCardProps) {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover border-[1.5px] border-black"
      />
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">${product.price}</p>
      </div>
    </Link>
  );
}

export default Productcard