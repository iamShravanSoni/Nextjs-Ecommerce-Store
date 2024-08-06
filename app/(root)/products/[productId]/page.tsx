import Gallery from '@/components/ui/Gallery';
import ProductInfo from '@/components/ui/ProductInfo';
import { getProductDetail } from '@/lib/actions/action'
import React from 'react'

async function ProductDetail({params}: {params : { productId: string}}) {
    const productDetail = await getProductDetail(params.productId)
    
  return (
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      <Gallery productMedia={productDetail.media} />
      <ProductInfo productInfo={productDetail} />
    </div>
  );
}

export default ProductDetail