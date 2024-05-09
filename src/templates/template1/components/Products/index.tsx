import ProductCard from "./ProductCard";

const Products = () => {
	return (
		<div className="product-list">
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
		</div>
	);
};

export default Products;
