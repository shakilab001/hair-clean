import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import styles from './styles.module.css';

const PageSixScroll2 = () => {
	const datas = [
		{
			title: 'Step 1',
			para: 'Nunc rhoncus est nibh, eu sagittis nisi dignissim ut. Ut porttitor dui nec purus interdum, non luctus lorem sollicitudin. Suspendisse sed risus vitae lacus pulvinar ornare at quis mi. Donec pharetra neque in tortor faucibus euismod. Aenean ex dui, rhoncus eu elit vitae, gravida congue odio. Fusce sed porta nisl. Fusce congue ultrices pharetra.',
		},
		{
			title: 'Step 2',
			para: 'Nunc rhoncus est nibh, eu sagittis nisi dignissim ut. Ut porttitor dui nec purus interdum, non luctus lorem sollicitudin. Suspendisse sed risus vitae lacus pulvinar ornare at quis mi. Donec pharetra neque in tortor faucibus euismod. Aenean ex dui, rhoncus eu elit vitae, gravida congue odio. Fusce sed porta nisl. Fusce congue ultrices pharetra.',
		},
		{
			title: 'Step 3',
			para: 'Nunc rhoncus est nibh, eu sagittis nisi dignissim ut. Ut porttitor dui nec purus interdum, non luctus lorem sollicitudin. Suspendisse sed risus vitae lacus pulvinar ornare at quis mi. Donec pharetra neque in tortor faucibus euismod. Aenean ex dui, rhoncus eu elit vitae, gravida congue odio. Fusce sed porta nisl. Fusce congue ultrices pharetra.',
		},
		{
			title: 'Step 4',
			para: 'Nunc rhoncus est nibh, eu sagittis nisi dignissim ut. Ut porttitor dui nec purus interdum, non luctus lorem sollicitudin. Suspendisse sed risus vitae lacus pulvinar ornare at quis mi. Donec pharetra neque in tortor faucibus euismod. Aenean ex dui, rhoncus eu elit vitae, gravida congue odio. Fusce sed porta nisl. Fusce congue ultrices pharetra.',
		},
		{
			title: 'Step 5',
			para: 'Nunc rhoncus est nibh, eu sagittis nisi dignissim ut. Ut porttitor dui nec purus interdum, non luctus lorem sollicitudin. Suspendisse sed risus vitae lacus pulvinar ornare at quis mi. Donec pharetra neque in tortor faucibus euismod. Aenean ex dui, rhoncus eu elit vitae, gravida congue odio. Fusce sed porta nisl. Fusce congue ultrices pharetra.',
		},
	];
	return (
		<div>
			<div className={styles.stepsHeading}>
				<h1 className={styles.stepsTitle}>Regimen</h1>
				<div className={styles.stepsArrows}>
					<img
						className={styles.arrow}
						id="regimenLeft"
						src="assets/images/product-page/arrow-left-regimen.svg"
						alt=""
					/>
					<img
						className={styles.arrow}
						id="regimenRight"
						src="assets/images/product-page/arrow-right-regimen.svg"
						alt=""
					/>
				</div>
			</div>
			<Swiper
				slidesPerView={2}
				spaceBetween={50}
				navigation={{
					nextEl: '#regimenRight',
					prevEl: '#regimenLeft',
				}}
				modules={[Navigation]}
				breakpoints={{
					240: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
			>
				{datas.map((data) => {
					return (
						<SwiperSlide>
							<div className={styles.stepsWrapper}>
								<h1 className={styles.stepsName}>{data.title}</h1>
								<p className={styles.stepsPara}>{data.para}</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default PageSixScroll2;
