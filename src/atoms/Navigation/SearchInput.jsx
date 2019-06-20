export const SearchInput = (props) => {

  const {
    className,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    "search-input",
    className
  ])

  return(
    <React.Fragment>
    <div className="search-input" >
      <input className="search-bar" placeholder="Search..." ></input>
    </div>
    </React.Fragment>
  );
};

SearchInput.prototype = {
  className: PropTypes.string
}

export default SearchInput;