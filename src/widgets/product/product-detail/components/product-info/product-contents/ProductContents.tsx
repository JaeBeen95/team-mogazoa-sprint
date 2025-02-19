import type { ProductDetailResponse } from '@shared/types'
import Button from '@shared/ui/button/Button'
import CategoryChip from '@/src/shared/ui/category-chip/CategoryChip'
import LikeButton from './LikeButton'
import KaKaoShareButton from './KaKaoShareButton'
import ClipBoardButton from './ClipBoardButton'
import ReviewButton from './ReviewButton'
import ProductUpdateButton from './ProductUpdateButton'
import Link from 'next/link'

interface ProductContentsProps extends ProductDetailResponse {
  loggedInUserId: number | null
}

export default function ProductContents({
  name,
  category,
  description,
  id,
  loggedInUserId,
  writerId,
  isFavorite,
}: ProductContentsProps) {
  const isCreatedProductUser = writerId === loggedInUserId

  return (
    <div className="relative w-[calc(100%-355px-40px)] text-white tablet:w-[51.478vw] mobile:w-full mobile:mt-5">
      <CategoryChip name={category.name} />
      <div className="flex justify-between items-center mt-2.5">
        <div className="flex items-center gap-x-[15px] mobile:w-full mobile:justify-between">
          <p className="text-2xl font-semibold tablet:text-xl">{name}</p>
          <LikeButton isFavorite={isFavorite} productId={id} />
        </div>
        <div className="flex gap-x-2.5 mobile:absolute mobile:top-0 mobile:right-0">
          <KaKaoShareButton />
          <ClipBoardButton />
        </div>
      </div>
      <p className="mt-[50px] mb-[60px] text-base tablet:text-sm mobile:mt-[20px]">
        {description}
      </p>
      <div className="flex gap-x-5 tablet:gap-x-[15px] mobile:flex-col mobile:gap-x-0 mobile:gap-y-[15px]">
        <ReviewButton
          productId={id}
          categoryName={category.name}
          productName={name}
        />
        <Button
          variant="secondary"
          className="w-[180px] h-[65px] tablet:w-[16.532vw] tablet:h-[55px] mobile:w-full"
        >
          <Link href={`/compare?id=${id}`}>비교하기</Link>
        </Button>

        {isCreatedProductUser && <ProductUpdateButton productId={id} />}
      </div>
    </div>
  )
}
