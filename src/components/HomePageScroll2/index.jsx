import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import styles from './styles.module.css';

const HomePageScroll2 = () => {
	const datas = [
		{
			image: 'assets/images/blog/01.png',
			title: 'THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...',
			name: 'Jennifer Cynthia',
			verify: 'assets/images/verify.svg',
			time: '2 weeks ago',
		},
		{
			image: 'assets/images/blog/02.png',
			title: 'THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...',
			name: 'Jennifer Cynthia',
			verify: 'assets/images/verify.svg',
			time: '2 weeks ago',
		},
		{
			image: 'assets/images/blog/03.png',
			title: 'THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...',
			name: 'Jennifer Cynthia',
			verify: 'assets/images/verify.svg',
			time: '2 weeks ago',
		},
		{
			image: 'assets/images/blog/01.png',
			title: 'THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...',
			name: 'Jennifer Cynthia',
			verify: 'assets/images/verify.svg',
			time: '2 weeks ago',
		},
		{
			image: 'assets/images/blog/02.png',
			title: 'THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...',
			name: 'Jennifer Cynthia',
			verify: 'assets/images/verify.svg',
			time: '2 weeks ago',
		},
		{
			image: 'assets/images/blog/03.png',
			title: 'THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...',
			name: 'Jennifer Cynthia',
			verify: 'assets/images/verify.svg',
			time: '2 weeks ago',
		},
		{
			image: 'assets/images/blog/01.png',
			title: 'THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...',
			name: 'Jennifer Cynthia',
			verify: 'assets/images/verify.svg',
			time: '2 weeks ago',
		},
	];
	return (
		<div>
			<div className={styles.blogTitle}>
				<h1 className={styles.blogHeading}>OUR BLOG</h1>
				<div className={styles.blogArrows}>
					<img
						className={styles.arrow}
						id="blogRight"
						src="assets/images/home-arrow-left.svg"
						alt=""
					/>
					<img
						className={styles.arrow}
						id="blogLeft"
						src="assets/images/home-arrow-right.svg"
						alt=""
					/>
				</div>
			</div>
			<Swiper
				// slidesPerView={3}
				spaceBetween={20}
				navigation={{
					nextEl: '#blogLeft',
					prevEl: '#blogRight',
				}}
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					277: {
						slidesPerView: 1.25,
						spaceBetween: 10,
					},
					577: {
						slidesPerView: 1.25,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 1.25,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},

					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
			>
				{datas.map((data, index) => {
					return (
						<SwiperSlide key={"1003" + index}>
							<>
								<img
									className={`${styles.blogImage} img-fluid`}
									src={data.image}
									alt=""
								/>
								<p className={styles.blogTitle}>{data.title}</p>
								<span className={styles.authorName}>
									{data.name} <img src={data.verify} alt="" />
								</span>
								<p className={styles.blogTime}>{data.time}</p>
							</>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default HomePageScroll2;
