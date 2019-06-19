import EditorWrapper from './EditorWrapper';

// Text Editor
class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.context[props.name] || props.defaultValue,
      /* eslint-disable */
      rawValue: props.context[props.name] || props.defaultValue,
      /* eslint-enable */
      caretPosition: 0
    };

    this.isTextArea = props.multiline || props.defaultValue.length > 40;
    this.$input = React.createRef();
    this.handleObservableChange = this.handleObservableChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { name, context } = this.props;
    context.startObservingState(name, this.handleObservableChange);
  }
  /* eslint-disable */
  componentDidUpdate(_, { value: prevValue }) {
    if (prevValue !== this.state.value) {
      const $current = this.$input.current;

      $current.selectionStart = this.state.caretPosition;
      $current.selectionEnd = this.state.caretPosition;
    }
  }
  /* eslint-enable */

  componentWillUnmount() {
    const { name, context } = this.props;
    context.stopObservingState(name, this.handleObservableChange);
  }

  handleObservableChange() {
    const { name, context } = this.props;
    this.setState({ value: context[name] });
  }

  handleChange(ev) {
    const { name, context, onChange } = this.props;
    this.setState({
      /* eslint-disable */
      rawValue: String(ev.target.value),
      /* eslint-enable */
      caretPosition: Number(ev.target.selectionEnd)
    });
    context.setContextState({ [name]: ev.target.value });
    if (onChange) onChange({ [name]: ev.target.value });
  }

  render() {
    const {
      name,
      label,
      defaultValue,
      ...rest
    } = this.props;

    return (
      <EditorWrapper
        type={this.isTextArea ? 'textarea' : 'text'}
        name={name}
        label={label}
        defaultValue={defaultValue}
        {...rest}
      >
        {
          this.isTextArea
            ? (
              <textarea
                ref={this.$input}
                id={name}
                name={name}
                key={name}
                value={this.state}
                onChange={this.handleChange}
                data-editor-textarea
              />
            )
            : (
              <input
                ref={this.$input}
                type="text"
                id={name}
                name={name}
                key={name}
                value={this.state}
                onChange={this.handleChange}
                data-editor-text
              />
            )
        }
      </EditorWrapper>
    );
  }
}

TextEditor.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  context: PropTypes.any
};

TextEditor.defaultProps = {
  defaultValue: '',
  onChange: () => {}
};

/* eslint-disable */
export default ({ ...args }) =>
  (
    <StatefulContext.Consumer>
      {(context) => <TextEditor context={context} {...args} />}
    </StatefulContext.Consumer>
  );
  /* eslint-enable */
