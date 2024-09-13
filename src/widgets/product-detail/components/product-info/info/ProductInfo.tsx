import { useFetchProductDetail } from '@shared/hooks'
import {
  ProductImage,
  ProductContents,
} from '@widgets/product-detail/components'

interface ProductInfoProps {
  productId: number
}

export default function ProductInfo({ productId }: ProductInfoProps) {
  const detailQuery = useFetchProductDetail(productId)
  const { image, category, description, name } = detailQuery.data!

  return (
    <section className="flex justify-between gap-x-[40px] target:gap-x-5 mobile:flex-col">
      <ProductImage image={image} />
      <ProductContents
        name={name}
        category={category}
        description={description}
        productId={productId}
      />
    </section>
  )
}
