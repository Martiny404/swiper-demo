import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function S() {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			navigation={true}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={swiper => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide>
				<div style={{ width: '100%', height: 300, background: 'red' }}></div>
			</SwiperSlide>
			<SwiperSlide>
				<div style={{ width: '100%', height: 300, background: 'yellow' }}></div>
			</SwiperSlide>
			<SwiperSlide>
				<div style={{ width: '100%', height: 300, background: 'blue' }}></div>
			</SwiperSlide>
			<SwiperSlide>
				<div style={{ width: '100%', height: 300, background: 'green' }}></div>
			</SwiperSlide>
		</Swiper>
	);
}
