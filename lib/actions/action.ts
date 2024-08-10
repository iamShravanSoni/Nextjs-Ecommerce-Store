export const getCollections = async () => {
  const collections = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections`
  );
  return await collections.json();
};

export const getCollectionDetail = async (collectionId: string) => {
  const collectionDetail = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`
  );
  return await collectionDetail.json();
};

export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return await products.json();
};

export const getProductDetail = async (productId: string) => {
  const productDetail = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
  );
  return await productDetail.json();
};

export const getRelatedProducts = async (productId: string) => {
  const relatedProduct = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`
  );
  return await relatedProduct.json();
};

export const getSearch = async (query: string) => {
  const search = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);
  return await search.json();
}
