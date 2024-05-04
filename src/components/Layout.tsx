const Layout = (props: { children: any }): JSX.Element => {
	const { children } = props;
	return (
		<div className="layout-default">
			<div className="layout-body">
				<div className="layout-wrapper">
					<div
						id="scroll-top-anchor"
						className="layout-wrapper-inner shadow-lg hide-scrollbar-indicator"
					>
						<div className="layout-default-content">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
