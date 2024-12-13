import type { FC } from 'react'
import type { BannerNode } from '@/constants/types.ts'

interface Props {
  banner: BannerNode
}


const BannerItemSlide: FC<Props> = ({ banner }) => {
  return (
      <div className="w-full h-96">
        <img
            alt=""
            src={banner.image}
            className="w-full h-full object-cover brightness-100"
        />
      </div>
  )
}

export default BannerItemSlide