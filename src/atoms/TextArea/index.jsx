export const TextArea = (props) => {

  const [characterCount, setcharacterCount] = useState({maxCharacters: 500});

  const handleChange = (e) => {
    let textareaCount = e.target.value.length;
    setcharacterCount({maxCharacters: 500 - textareaCount});
  };

  const {
    className,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'TextArea',
    className
  ]);

  return (
    <React.Fragment>
    <textarea
      type="text"
      className={stack} {...rest}
      onChange={(e) => handleChange(e)}
      maxLength="500"
    />
    <p className="TextArea__word-counter">{characterCount.maxCharacters}/500</p>
    </React.Fragment>
  );
};

TextArea.propTypes = {
  className: PropTypes.string
};

export default TextArea;
