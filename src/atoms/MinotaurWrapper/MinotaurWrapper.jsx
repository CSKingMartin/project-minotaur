export const MinotaurWrapper = (props) => {
	const {
		size,
		className,
		children
	} = props;

	const stack = utilities.createClassStack([
		'MinotaurWrapper',
		`MinotaurWrapper--${size}`,
		className
	]);

	return (
		<div className={stack}>
			{children}
		</div>
	);
};

MinotaurWrapper.propTypes = {
	size: PropTypes.oneOf(['default', 'wide']),
	className: PropTypes.string,
  children: PropTypes.node
}

export default MinotaurWrapper;
