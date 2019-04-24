export const MinotaurHeading = (props) => {
	const {
		tagName,
		size,
		weight,
		className,
		children
	} = props;

	const Tag = tagName || size || 'h1';

	const stack = utilities.createClassStack([
		'MinotaurHeading',
		`MinotaurHeading--${size}`,
		className
	]);

	return (
		<Tag className={stack}>{children}</Tag>
	)
};

MinotaurHeading.propTypes = {
	children: PropTypes.node,
	tagName: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.func
	])
};

export default MinotaurHeading;
