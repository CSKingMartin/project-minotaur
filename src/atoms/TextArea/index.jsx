export const TextArea = (props) => {
  const {
    className,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'TextArea',
    className
  ]);

  const [characterCount, setcharacterCount] = useState(props.MaxChar);

  const handleChange = (e) => {
    const { length } = e.target.value;
    setcharacterCount(props.MaxChar - length);
  };

  return (
    <div className={stack}>
    <textarea
      type="text"
      className="TextArea__input"
      onChange={(e) => handleChange(e)}
      maxLength={props.MaxChar}
    />
    <p className="TextArea__word-counter">{characterCount}/{props.MaxChar}</p>
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string
};

export default TextArea;
