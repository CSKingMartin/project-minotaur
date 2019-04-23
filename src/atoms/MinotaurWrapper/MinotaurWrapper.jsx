export const MinotaurWrapper = (props) => {
	const {
		className,
		children
	} = props;

	return (
		<div className="MinotaurWrapper">
			{children}
		</div>
	);
};

MinotaurWrapper.propTypes = {
	className: PropTypes.string,
  children: PropTypes.node
}

export default MinotaurWrapper;
