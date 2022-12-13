import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import styles from './styles.module.css';

const PageSixScroll1 = () => {
	const datas = [
		{
			image: 'assets/images/product-page/product/01.png',
			name: 'Products #1',
			title: '$9.99',
		},
		{
			image: 'assets/images/product-page/product/02.png',
			name: 'Products #1',
			title: '$9.99',
		},
		{
			image: 'assets/images/product-page/product/03.png',
			name: 'Products #1',
			title: '$9.99',
		},
		{
			image: 'assets/images/product-page/product/04.png',
			name: 'Products #1',
			title: '$9.99',
		},
		{
			image: 'assets/images/product-page/product/04.png',
			name: 'Products #1',
			title: '$9.99',
		},
	];
	return (
		<div>
			<div className={styles.productHeading}>
				<h1 className={styles.productTitle}>Products</h1>
				<div className={styles.productArrows}>
					<img
						className={styles.arrow}
						id="productLeft"
						src="assets/images/profile-page/arrow-left-recommedation.svg"
						alt=""
					/>
					<img
						className={styles.arrow}
						id="productRight"
						src="assets/images/profile-page/arrow-right-recommedation.svg"
						alt=""
					/>
				</div>
			</div>
			<Swiper
				slidesPerView={2}
				spaceBetween={50}
				navigation={{
					nextEl: '#productRight',
					prevEl: '#productLeft',
				}}
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					200: {
						slidesPerView: 2.5,
						spaceBetween: 20,
						grabCursor: true,
					},
					400: {
						slidesPerView: 2.5,
						spaceBetween: 20,
						grabCursor: true,
					},
					640: {
						slidesPerView: 2.5,
						spaceBetween: 20,
						grabCursor: true,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
						grabCursor: true,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
						grabCursor: true,
					},
				}}
			>
				{datas.map((data) => {
					return (
						<SwiperSlide>
							<div className={styles.productCard}>
								<img
									className={`${styles.productCardImage} img-fluid`}
									src={data.image}
									alt=""
								/>
								<div className={styles.productCardnames}>
									<p className={styles.productCardName}>{data.name}</p>
									<p className={styles.productCardTitle}>{data.title}</p>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default PageSixScroll1;
