export const Brand = (props) => {
	const {
		className,
		children,
		...rest
	}	= props;

	const stack = utilities.createClassStack = ([
		'Brand',
		className
	]);

	return (
		<div className={stack}>Hi mom</div>
	);
};

Brand.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default Brand;
