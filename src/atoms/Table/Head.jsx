export const TableHead = (props) => {
	const {
		className,
		children
	}	= props;

	return (
		<thead>{children}</thead>
	);
};

TableHead.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default TableHead;
