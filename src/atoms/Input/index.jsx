import Label from '@atoms/Label';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmpty: true,
      hasError: false
    };

    this.onInput = this.onInput.bind(this);
  }

  onInput (ev) {
    const { value } = ev.target;

    if (value.length > 0) {
      this.setState({
        isEmpty: false
      });
    } else {
      this.setState({
        isEmpty: true
      });
    }
  }

  render () {
    const {
      className,
      label,
      name,
      placeholder,
      isRequired,
      ...rest
    } = this.props;

    const {
      isEmpty,
      hasError
    } = this.state;

    const stack = utilities.createClassStack([
      'Input',
      className
    ]);

    return (
      <div className={stack} {...rest}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <input className="Input__input" name={name} placeholder={placeholder} onChange={this.onInput} />
      </div>
    );
  }
};

export default Input;
