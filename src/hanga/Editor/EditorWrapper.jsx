/* abstracted component */
class EditorWrapper extends React.Component {
	/* lifecycle loads props, default state */
	componentDidMount () {
		const {
			context,
			name,
			defaultValue
		} = this.props;

		if (defaultValue !== undefined) { // set default value if it was passed
      context.setContextState({
        [name]: defaultValue
      })
    }
  }

	render () {
		const {
			label,
			name,
			type,
			children,
			context,
			hideLabel,
			multiline,
			...rest
		} = this.props;

		return (
			<fieldset data-type={type} {...rest}>
				{ !hideLabel && <label htmlFor={name}>{label || name}</label> }
        <div>{children}</div>
			</fieldset>
		);
	};
};

EditorWrapper.propTypes = {
	label: PropTypes.string, // Label of Editor form field
  name: PropTypes.string.isRequired, // associates input / field control
  type: PropTypes.string,
  defaultValue: PropTypes.any,
  children: PropTypes.any.isRequired,
  context: PropTypes.object,
  hideLabel: PropTypes.bool
};

EditorWrapper.defaultValue = {
	hideLabel: false
};

export default ({ children, ...rest }) =>
	<StatefulContext.Consumer>
		{
			context =>
				<EditorWrapper context={context} {...rest}>
					{children}
				</EditorWrapper>
		}
	</StatefulContext.Consumer>
