import React from 'react';
import PropTypes from 'prop-types';
import StatefulContext from 'react-stateful-context';
import EditorWrapper from './EditorWrapper';

// Toggle Editor
class ToggleEditor extends React.Component {
  constructor(props) {
    super(props);
    this.initialValue = props.context[props.name] || props.defaultValue || false;
    this.state = {
      isChecked: this.initialValue
    };

    this.handleObservableChange = this.handleObservableChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    this.setState({ isChecked: context[name] });
  }

  handleChange(ev) {
    const { name, context } = this.props;
    context.setContextState({ [name]: ev.target.value === 'true' });
  }

  render() {
    const {
      name,
      label,
      ...rest
    } = this.props;

    return (
      <EditorWrapper
        type="toggle"
        name={name}
        label={label}
        defaultValue={this.initialValue}
        {...rest}
      >
        <div data-editor-toggle-wrapper>
          <div>
            <input
              type="radio"
              id={`${name}-true`}
              name={name}
              value="true"
              /* eslint-disable-next-line */
              checked={this.state.isChecked}
              onChange={this.handleChange}
              data-editor-toggle
            />
            {/* eslint-disable-next-line */}
            <label htmlFor={`${name}-true`}>True</label>
          </div>
          <div>
            <input
              type="radio"
              id={`${name}-false`}
              name={name}
              value="false"
              /* eslint-disable-next-line */
              checked={!this.state.isChecked}
              onChange={this.handleChange}
              data-editor-toggle
            />
            {/* eslint-disable-next-line */}
            <label htmlFor={`${name}-false`}>False</label>
          </div>
        </div>
      </EditorWrapper>
    );
  }
}

ToggleEditor.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func,
  context: PropTypes.any
};

ToggleEditor.defaultProps = {
  defaultValue: false,
  onChange: () => {}
};

export default ({ ...args }) => (
  <StatefulContext.Consumer>
    {
      (context) => <ToggleEditor context={context} {...args} />
    }
  </StatefulContext.Consumer>
);
