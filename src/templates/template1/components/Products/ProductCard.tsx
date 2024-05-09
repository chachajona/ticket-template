import { useNavigate } from "react-router-dom";

interface ProductCardProps {
	id: string;
	imageUrl?: string;
	altText?: string;
	title: string;
	subtitle?: string;
	date?: string;
	time?: string;
	address?: string;
	price?: string;
	onFavorite?: () => void;
	onViewTicket?: () => void;
}

const DetailItem: React.FC<{ icon: string; text: string }> = ({
	icon,
	text,
}) => (
	<div className="product-card-detail-item">
		<i className={icon}></i>
		<span>{text}</span>
	</div>
);

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	imageUrl = "https://via.placeholder.com/150",
	altText = "product",
	title,
	subtitle,
	date,
	time,
	address,
	price,
	onFavorite,
	onViewTicket,
}) => {
	const navigate = useNavigate();
	const handleViewTicket = () => {
		navigate(`/products/${id}`, {
			state: { imageUrl, altText, title, subtitle, date, time, address, price },
		});
		onViewTicket?.();
	};

	return (
		<div className="product-card-wrapper">
			<div className="product-card-image-wrapper">
				<img className="product-card-image" src={imageUrl} alt={altText} />
				<i
					className="bi bi-heart-fill product-card-favorite"
					onClick={onFavorite}
				></i>
			</div>
			<div className="product-card-content">
				<div className="product-card-title">
					<span className="product-card-heading">{title}</span>
					{subtitle && (
						<span className="product-card-subheading">{subtitle}</span>
					)}
				</div>
				<div className="product-card-detail">
					{date && <DetailItem icon="bi bi-calendar" text={date} />}
					{time && <DetailItem icon="bi bi-clock" text={time} />}
					{address && <DetailItem icon="bi bi-geo-alt" text={address} />}
				</div>
			</div>
			<div className="product-card-bottom">
				{price && (
					<div className="product-card-price">
						<i className="bi bi-ticket-perforated"></i>
						<span>{price}</span>
					</div>
				)}
				<div className="product-card-button" onClick={handleViewTicket}>
					<span>View Ticket</span>
					<i className="bi bi-arrow-right"></i>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
