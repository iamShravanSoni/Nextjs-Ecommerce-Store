import { getProducts } from '@/lib/actions/action';
import React from 'react'
import Productcard from './ui/Productcard';

const Productlist = async() => {
    const products = await getProducts()
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No Products !!</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
            {products.map((product:ProductType) => (
                <Productcard key={product._id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Productlist