import Expandable from '@molecules/Expandable';
import Label from '@atoms/Label';

export const Input = (props) => {
  const {
    className,
    id,
    label,
    name,
    placeholder,
    isRequired,
    errorMessage,
    additionalChange,
    regex,
    ...rest
  } = props;

  const [loaded, init] = useState(false);
  const [value, setValue] = useState('');
  const [valid, setValidation] = useState(true);

  const reference = React.createRef();

  const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

  const validate = () => {
    if (value.length === 0) {
      setValidation(false);
    } else if (regex) {
      const regexTest = RegExp(regex);
      setValidation(regexTest.test(value));
    } else {
      setValidation(true);
    }
  };

  useEffect(() => {
    if (loaded) {
      if (isRequired && value.length >= 0) { validate(); }
    }
  });

  const stack = utilities.createClassStack([
    'Input',
    !valid && 'Input--has-error',
    className
  ]);

  const updateState = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={stack} {...rest}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <input
        className="Input__input"
        name={name}
        id={name}
        placeholder={placeholder}
        onBlur={() => init(true)}
        onChange={callAll(updateState, additionalChange)}
        ref={reference}
      />
      <Expandable
        className="Input__error"
        forceExpand={!valid}
        toggleElement="none"
        closeHeight="0"
      >
        {errorMessage}
      </Expandable>
    </div>
  );
};

Input.defaultProps = {
  isRequired: false,
  errorMessage: 'Oops! This field is required 😉'
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  regex: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  additionalChange: PropTypes.func,
  errorMessage: PropTypes.string
};

export default Input;
