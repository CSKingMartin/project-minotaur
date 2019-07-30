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

  const displayMaxChar = () => {
    if(props.max) {
      return (<p className="TextArea__word-counter">{characterCount}/{props.max}</p> )
    } else {
      return (<p className="TextArea__word-counter">{characterCount}/{props.max}</p> )
    }
  }

  return (
    <div className={stack}>
    <textarea
      type="text"
      className="TextArea__input"
      onChange={(e) => handleChange(e)}
      maxLength={props.max}
    />
    { props.max ? <p className="TextArea__word-counter">{characterCount}/{props.max}</p> : null}
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number
};

export default TextArea;
