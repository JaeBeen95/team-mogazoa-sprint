import Image from 'next/image'
import TestProductImage from '@/public/test/product_image.png'

export default function ProductImage() {
  return (
    <div className="relative w-[355px] h-[250px] tablet:w-[37.634vw] tablet:h-[197px] mobile:w-full mobile:h-[62.933vw]">
      <Image
        src={TestProductImage}
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  )
}
