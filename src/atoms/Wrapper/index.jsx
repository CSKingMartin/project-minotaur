export const Wrapper = (props) => {
	const {
		size,
		className,
		children
	} = props;

	const stack = utilities.createClassStack([
		'Wrapper',
		`Wrapper--${size}`,
		className
	]);

	return (
		<div className={stack}>
			{children}
		</div>
	);
};

Wrapper.defaultProps = {
	size: 'default'
};

Wrapper.propTypes = {
	size: PropTypes.oneOf(['default', 'content', 'wide']),
	className: PropTypes.string,
  children: PropTypes.node
}

export default Wrapper;
