import EditorWrapper from './EditorWrapper';

// Select Editor
class SelectEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* eslint-disable */
      value: props.context[props.name] || props.defaultValue
      /* eslint-enable */
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleObservableChange = this.handleObservableChange.bind(this);
  }

  componentWillMount() {
    const { name, context } = this.props;
    context.startObservingState(name, this.handleObservableChange);
  }

  componentWillUnmount() {
    const { name, context } = this.props;
    context.stopObservingState(name, this.handleObservableChange);
  }

  handleObservableChange() {
    const { name, context } = this.props;
    /* eslint-disable */
    this.setState({ value: context[name] });
    /* eslint-enable */
  }

  handleChange(ev) {
    const { name, context } = this.props;
    context.setContextState({ [name]: ev.target.value });
  }

  render() {
    const {
      name,
      label,
      defaultValue,
      options = [],
      ...rest
    } = this.props;

    return (
      <EditorWrapper type="select" name={name} label={label} defaultValue={defaultValue} {...rest}>
        <div data-editor-select>
          <select
            id={name}
            name={name}
            value={this.state}
            onChange={this.handleChange}
          >
            {
              options
                .map((value) => (
                  typeof value === 'object'
                    ? value
                    : { value, text: value }
                ))
                .map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                  >
                    {opt.text}
                  </option>
                ))
            }
          </select>
        </div>
      </EditorWrapper>
    );
  }
}

SelectEditor.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  context: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ])
  )
};
/* eslint-disable */
export default ({ ...args }) => (
  <StatefulContext.Consumer>
    {
      (context) => (
        <SelectEditor context={context} {...args} />
      )
    }
  </StatefulContext.Consumer>
);
/* eslint-enable */
