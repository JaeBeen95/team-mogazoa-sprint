import type { ProductDetailResponse } from '@shared/types'
import { StatisticsListItem } from '@widgets/product-detail/components'
import { STATISTICS_CARD } from '@widgets/product-detail/constants'

export default function StatisticsList(statisticsData: ProductDetailResponse) {
  return (
    <ul className="flex gap-x-5 mobile:flex-col mobile:gap-x-0 mobile:gap-y-[15px] mobile:relative">
      {STATISTICS_CARD.map((card) => {
        const { name, ...data } = card
        return (
          <StatisticsListItem
            key={card.name}
            {...data}
            score={statisticsData[name]}
            scoreMetric={statisticsData.categoryMetric[name]}
          />
        )
      })}
    </ul>
  )
}
