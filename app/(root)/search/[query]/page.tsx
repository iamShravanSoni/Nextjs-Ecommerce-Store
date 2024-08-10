import Productcard from '@/components/ui/Productcard'
import { getSearch } from '@/lib/actions/action'

const SearchPage = async ({ params }: { params: { query: string }}) => {
  const search = await getSearch(params.query)

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className='px-10 py-5'>
      <p className='text-heading3-bold my-10'>Search results for {decodedQuery}</p>
      {!search || search.length === 0 && (
        <p className='text-body-bold my-5'>No result found</p>
      )}
      <div className='flex flex-wrap justify-between gap-16'>
        {search?.map((product: ProductType) => (
          <Productcard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default SearchPage