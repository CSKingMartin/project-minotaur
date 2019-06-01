export const TableData = (props) => {
	const {
		className,
		children
	}	= props;

	return (
		<td>{children}</td>
	);
};

TableData.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default TableData;
