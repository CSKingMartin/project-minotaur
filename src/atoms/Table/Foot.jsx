export const TableFoot = (props) => {
	const {
		className,
		children
	}	= props;

	return (
		<tfoot>{children}</tfoot>
	);
};

TableFoot.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default TableFoot;
