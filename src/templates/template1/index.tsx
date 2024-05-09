import "./template1.scss";
import Header from "./components/Header/Header";
import ProductCategory from "./components/Products/ProductCategory";

const index = () => {
	return (
		<div className="template1">
			<Header />
			<ProductCategory />
		</div>
	);
};

export default index;
