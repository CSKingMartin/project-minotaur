export const TableHeader = (props) => {
	const {
		className,
		children
	}	= props;

	return (
		<th>{children}</th>
	);
};

TableHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default TableHeader;
