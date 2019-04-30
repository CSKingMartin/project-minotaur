const Editors = ({ children }) => {
	return (
		React.Children.toArray(children).filter(a => a).length > 0
      ? <div className="Editors">{children}</div>
      : <div />
	);
};

Editors.propTypes = {
	children: PropTypes.any
}

export default Editors;
