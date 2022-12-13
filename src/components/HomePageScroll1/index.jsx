import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import styles from './styles.module.css';

const HomePageScroll1 = () => {
	const datas = [
		{
			image: 'assets/images/queations.svg',
			para: 'Eenim nisi finibus purus, suscipit tempus quam libero eu sapien. In turpis lectus, venenatis eu urna ac, vehicula ornare felis. Nunc luctus nunc dui.',
			title: 'assets/images/as-featured-in/cnn.svg',
		},
		{
			image: 'assets/images/queations.svg',
			para: 'Eenim nisi finibus purus, suscipit tempus quam libero eu sapien. In turpis lectus, venenatis eu urna ac, vehicula ornare felis. Nunc luctus nunc dui.',
			title: 'assets/images/as-featured-in/unyi-corps.png',
		},
		{
			image: 'assets/images/queations.svg',
			para: 'Eenim nisi finibus purus, suscipit tempus quam libero eu sapien. In turpis lectus, venenatis eu urna ac, vehicula ornare felis. Nunc luctus nunc dui.',
			title: 'assets/images/as-featured-in/authority-mag.png',
		},
	];

	return (
		<div>
			<div className={styles.featuresTitle}>
				<h1 className={styles.cardsHeading}>AS FEATURED IN</h1>
				<div className={styles.cardArrows}>
					<img
						className={styles.arrow}
						id="slideRight"
						src="assets/images/home-arrow-left.svg"
						alt=""
					/>
					<img
						className={styles.arrow}
						id="slideLeft"
						src="assets/images/home-arrow-right.svg"
						alt=""
					/>
				</div>
			</div>
			<Swiper
				slidesPerView={2}
				spaceBetween={20}
				navigation={{
					nextEl: '#slideLeft',
					prevEl: '#slideRight',
				}}
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					277: {
						slidesPerView: 1.2,
						spaceBetween: 20,
					},
					577: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 2,
					},
				}}
			>
				{datas.map((data, index) => {
					return (
						<SwiperSlide key={"1002-" + index}>
							<div className={styles.cards}>
								<img className={styles.cardImage} src={data.image} alt="" />
								<p className={styles.cardPara}>{data.para}</p>
								<img src={data.title} alt="featured" className={styles.cardTitle} />
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default HomePageScroll1;
