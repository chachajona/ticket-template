import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const ProductCategory = () => {
	const navigate = useNavigate();
	const handleViewAll = () => {
		navigate("/products");
	};
	return (
		<div className="product-wrapper">
			<div className="product-header">
				<span>Latest Events</span>
				<div className="view-all" onClick={handleViewAll}>
					<span>View All</span>
					<i className="bi bi-arrow-right-short"></i>
				</div>
			</div>
			<div className="product-slider">
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={40}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<ProductCard
							id="1"
							imageUrl="https://via.placeholder.com/150/C0C0C0/FFFFFF?text=Music+Festival"
							altText="Music Festival"
							title="Summer Beats 2024"
							subtitle="The Ultimate Music Experience"
							date="June 15, 2024"
							time="2:00 PM - 2:00 AM"
							address="Sunshine Park"
							price="USD 299"
						/>
					</SwiperSlide>

					<SwiperSlide>
						<ProductCard
							id="2"
							imageUrl="https://via.placeholder.com/150/FF0000/FFFFFF?text=Rock+Concert"
							altText="Rock Concert"
							title="Rocking the Arena 2024"
							subtitle="Featuring The Electric Zebras"
							date="July 8, 2024"
							time="8:00 PM - 11:00 PM"
							address="Grand Arena"
							price="USD 120"
						/>
					</SwiperSlide>

					<SwiperSlide>
						<ProductCard
							id="3"
							imageUrl="https://via.placeholder.com/150/800080/FFFFFF?text=Broadway+Show"
							altText="Broadway Show"
							title="Phantom Returns"
							subtitle="The Broadway Hit Musical"
							date="October 19, 2024"
							time="7:00 PM - 10:00 PM"
							address="Royal Theater"
							price="USD 200"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default ProductCategory;
