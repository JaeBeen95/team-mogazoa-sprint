import { useState, useEffect } from 'react'
import useWindowResize from '@shared/hooks/useWindowResize'
import {
  ReviewedProducts,
  CreatedProducts,
  FavoriteProducts,
  ProductWrapper,
} from '@widgets/profile/components'
import { CategoryPc, CategoryTablet } from '@widgets/profile/components/'
import { PRODUCT_CATEGORIES } from '@widgets/profile/constants'
import type { UserId } from '@shared/types'
import type { CategoryTitle } from '@widgets/profile/types'

export default function ProductCardSection({ userId }: UserId) {
  const [isClient, setIsClient] = useState(false)
  const [activeCategory, setActiveCategory] = useState<CategoryTitle>(
    PRODUCT_CATEGORIES[0].title,
  )
  const windowWidth = useWindowResize(1280)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const componentMap = {
    ReviewedProducts: (props: UserId) => <ReviewedProducts {...props} />,
    RegisteredProducts: (props: UserId) => <CreatedProducts {...props} />,
    WishListedProducts: (props: UserId) => <FavoriteProducts {...props} />,
  }

  const ActiveComponent =
    componentMap[
      PRODUCT_CATEGORIES.find((category) => category.title === activeCategory)
        ?.componentName || 'ReviewedProducts'
    ]
  if (!isClient) return null

  return (
    <section className="flex flex-col gap-6 w-full pb-[60px]">
      {windowWidth !== null &&
        (windowWidth < 1280 ? (
          <CategoryTablet
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ) : (
          <CategoryPc
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      <ProductWrapper>
        <ActiveComponent userId={userId} />
      </ProductWrapper>
    </section>
  )
}
