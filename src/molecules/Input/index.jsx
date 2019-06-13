import Expandable from '@molecules/Expandable';
import Label from '@atoms/Label';

export const Input = (props) => {
  const {
    className,
    label,
    name,
    type,
    id,
    placeholder,
    isRequired,
    errorMessage,
    regex,
    ...rest
  } = props;

  const [loaded, init] = useState(false); 
  const [value, setValue] = useState('');
  const [valid, setValidation] = useState(true);

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

  return (
    <div className={stack} {...rest}>
      {label && <Label for={id}>{label}</Label>}
      <input
        className="Input__input"
        type={type}
        name={name}
        id={id}
        aria-labelledby={`${id}--has-error`}
        placeholder={placeholder}
        onBlur={() => init(true)}
        onChange={(e) => setValue(e.target.value)}
      />
      <Expandable
        id={`${id}--has-error`}
        role="alert"
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
  type: 'text',
  isRequired: false,
  errorMessage: 'Oops! This field is required 😉'
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.string
}

export default Input;
