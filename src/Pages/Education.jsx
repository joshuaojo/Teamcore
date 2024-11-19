import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-cards';
import { SwiperSlide , Swiper} from 'swiper/react'
import { Navigation, Pagination, EffectCube, EffectCards,} from 'swiper/modules';
const Education = () => {
  return (
    <div className='md:mt-80 mt-32 w-[200px] md:w-[500px] mx-auto'>
      <Swiper
       modules={[Navigation, Pagination , EffectCube, EffectCards,]}
       effect={'cards'}
        grabCursor={true}
       navigation
       pagination={true}
       >
       <SwiperSlide>
        <div className='bg-customOrange w-[200px] md:w-[500px] h-[400px] md:h-[800px]'></div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='bg-customgrey  w-[200px] md:w-[500px] h-[400px] md:h-[800px]'></div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='bg-red-600  w-[200px] md:w-[500px] h-[400px] md:h-[800px]'></div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='bg-yellow-600  w-[200px] md:w-[500px] h-[400px] md:h-[800px]'></div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='bg-green-600 w-[200px] md:w-[500px] h-[400px] md:h-[800px]'></div>
       </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Education