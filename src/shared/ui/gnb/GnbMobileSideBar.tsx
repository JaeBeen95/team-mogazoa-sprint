import { forwardRef } from 'react'
import { CategoryMenu } from '../../../widgets/product/product-home/components/category-menu'
import GnbMenu from './GnbMenu'
import { useRouter } from 'next/router'

interface GnbMobileSideBarProps {
  menuVisible: boolean
  closeCategoryMenu: () => void
  cookie: any
}

const GnbMobileSideBar = forwardRef<HTMLDivElement, GnbMobileSideBarProps>(
  ({ menuVisible, closeCategoryMenu, cookie }, ref) => {
    const router = useRouter()
    const isMainPage = router.pathname !== '/' ? 'top-[70px]' : ''
    return (
      <div
        className="hidden mobile:flex flex-col shrink-0 fixed w-full top-[70px] left-0"
        ref={ref}
      >
        <div
          className={`  px-[20px] py-[30px] hidden ${menuVisible ? 'mobile:block' : ''} z-dropdown bg-black-50    ${isMainPage}`}
          onClick={closeCategoryMenu}
        >
          <GnbMenu cookie={cookie} />
        </div>
      </div>
    )
  },
)

GnbMobileSideBar.displayName = 'GnbMobileSideBar'

export default GnbMobileSideBar
