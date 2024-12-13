import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import banners from '@/constants/banners.json'
import BannerItemSlide from '@home/components/BannerItemSlide.tsx'


const MainBanner = () => {
  return (
      <section className="container">
        <Swiper
            loop
            centeredSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
          {
            banners.map(banner => (
                <SwiperSlide key={banner.id}>
                  <BannerItemSlide banner={banner}/>
                </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
  )
}
export default MainBanner