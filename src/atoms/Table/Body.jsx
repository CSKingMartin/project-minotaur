export const TableBody = (props) => {
	const {
		className,
		children
	}	= props;

	return (
		<tbody>{children}</tbody>
	);
};

TableBody.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

export default TableBody;
