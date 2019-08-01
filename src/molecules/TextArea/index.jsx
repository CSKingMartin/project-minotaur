import callAll from '@lib/utilities';

export const TextArea = (props) => {
  const {
    className,
    placeholder,
    max,
    onChange,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'TextArea',
    className
  ]);

  const [characterCount, setcharacterCount] = useState(props.max);

  const updateCharactersLeft = (e) => {
    const { length } = e.target.value;
    setcharacterCount(max - length);
  };

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={stack} {...rest}>
      <textarea
        placeholder={placeholder}
        type="text"
        className="TextArea__input"
        onChange={(e) => callAll(updateCharactersLeft(e)), (e) => handleChange(e)}
        maxLength={max}
      />
      {max && <p className="TextArea__word-counter">{characterCount}/{max}</p>}
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number
};

export default TextArea;
