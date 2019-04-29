export const MinotaurHeading = (props) => {
	const {
		tagName,
		level,
		weight,
		className,
		children,
		...rest
	} = props;

	const Tag = tagName || level || 'h1';

	const stack = utilities.createClassStack([
		'MinotaurHeading',
		`MinotaurHeading--${level}`,
		className
	]);

	return (
		<Tag className={stack} {...rest}>{children}</Tag>
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
