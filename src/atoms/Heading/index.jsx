export const Heading = (props) => {
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
		'Heading',
		`Heading--${level}`,
		className
	]);

	return (
		<Tag className={stack} {...rest}>{children}</Tag>
	)
};

Heading.defaultProps = {
	level: 'h1'
};

Heading.propTypes = {
	children: PropTypes.node,
	tagName: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.func
	])
};

export default Heading;
