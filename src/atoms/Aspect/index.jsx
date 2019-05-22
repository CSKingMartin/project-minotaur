export const Aspect = (props) => {
	const {
		className,
		children,
		...rest
	} = props;

	const stack = utilities.createClassStack([
		'Aspect',
		className
	]);

	return (
		<div className={stack} {...rest}>{children}</div>
	);
};

Aspect.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}

export default Aspect;
