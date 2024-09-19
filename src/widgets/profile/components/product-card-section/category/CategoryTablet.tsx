import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui'
import { PRODUCT_CATEGORIES } from '@widgets/profile/constants/ProductCategories.constant'
import type { CategorySelectorProps } from '../../../types/Category.type'

export default function CategoryDropdown({
  activeCategory,
  setActiveCategory,
}: CategorySelectorProps) {
  return (
    <Dropdown variant="none">
      <DropdownTrigger className="px-0 text-white whitespace-nowrap tablet:text-lg">
        {activeCategory}
      </DropdownTrigger>
      <DropdownMenu>
        {PRODUCT_CATEGORIES.map(({ title }) => (
          <DropdownMenuItem
            key={title}
            onClick={() => setActiveCategory(title)}
            className={`text-xl ${
              activeCategory === title ? 'text-white' : 'text-black-30'
            }`}
          >
            {title}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
