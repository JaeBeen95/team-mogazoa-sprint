import Image from 'next/image'
import { search } from '@app/icons'
import { useRouter } from 'next/router'

export default function GnbInput() {
  // 상품 검색 로직은 어떻게 작동되는지 파악이 안돼서 후에 작성 하겠습니다.
  const router = useRouter()
  if (router.pathname === '/signin' || router.pathname === '/signup') return
  return (
    <div className="relative">
      <input
        className="text-[14px] text-white w-[400px] h-[50px] rounded-[30px] px-[40px] py-[5px] bg-black-70 tablet:w-[300px] tablet:h-[40px] target:text-[12px]"
        placeholder="상품 이름을 검색해 보세요"
      />
      <Image
        className="absolute left-[13px] top-[16Px] tablet:top-[5px]"
        src={search}
        width={20}
        height={20}
        alt="돋보기 아이콘"
      />
    </div>
  )
}
