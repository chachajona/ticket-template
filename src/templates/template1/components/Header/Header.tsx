import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="header-search">
				<i className="bi bi-search"></i>
				<input type="text" placeholder="Search..." />
			</div>
			<span className="header-menu-title">Explore by Category</span>
			<div className="header-menu">
				<Swiper
					style={{ width: "100%" }}
					slidesPerView={4}
					spaceBetween={10}
				>
					<SwiperSlide>
						<div className="header-menu-item item-1">
							<span>All</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="header-menu-item item-2">
							<i className="bi bi-music-note"></i>
							<span>Concert</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="header-menu-item item-3">
							<i className="bi bi-airplane-fill"></i>
							<span>Flight</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="header-menu-item item-4">
							<i className="bi bi-house-fill"></i>
							<span>Hotel</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="header-menu-item item-5">
							<i className="bi bi-trophy-fill"></i>
							<span>Sports</span>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="header-menu-item item-6">
							<i className="bi bi-camera-reels-fill"></i>
							<span>Theatre</span>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Header;
