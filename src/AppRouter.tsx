import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./containers/app/App";
import Template1 from "./templates/template1/index";
import Template2 from "./templates/template2";
import Layout from "components/Layout";
import ProductDetail from "templates/template1/components/Products/ProductDetail";
import Products from "templates/template1/components/Products";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/template1/*" element={<Template1 />} />
					<Route path="/template2" element={<Template2 />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default AppRouter;
