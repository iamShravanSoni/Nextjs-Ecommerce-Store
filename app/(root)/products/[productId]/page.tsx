import Gallery from "@/components/ui/Gallery";
import Productcard from "@/components/ui/Productcard";
import ProductInfo from "@/components/ui/ProductInfo";
import { getProductDetail, getRelatedProducts } from "@/lib/actions/action";
import React from "react";

async function ProductDetail({ params }: { params: { productId: string } }) {
  const productDetail = await getProductDetail(params.productId);
  const relatedProduct = await getRelatedProducts(params.productId);
  console.log(relatedProduct);
  

  return (
    <>
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetail.media} />
        <ProductInfo productInfo={productDetail} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold">Related Products</p>
        <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {relatedProduct.length > 0 ? (
            <p className="text-body-bold">No Products !!</p>
          ) : (
            <div>
              {relatedProduct.map((product: ProductType) => (
                <Productcard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
