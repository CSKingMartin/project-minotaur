export const TextArea = (props) => {
  const {
    className,
    max,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'TextArea',
    className
  ]);

  const [characterCount, setcharacterCount] = useState(props.max);

  const handleChange = (e) => {
    const { length } = e.target.value;
    setcharacterCount(props.max - length);
  };

  return (
    <div className={stack}>
    <textarea
      type="text"
      className="TextArea__input"
      onChange={(e) => handleChange(e)}
      maxLength={props.max}
    />
    <p className="TextArea__word-counter">{characterCount}/{props.max}</p>
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number
};

export default TextArea;
