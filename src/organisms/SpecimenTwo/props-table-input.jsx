
export const TableInput = (props) => {
const {
    defaultValue,
    propName,
    query,
    placeholder,
    handleChange,
    ...rest
  } = props;

  return(
    <input
      deafaultValue={defaultValue}
      propName={propName}
      placeholder={placeholder}
      onChange={(propName)=>handleChange(propName)}
    ></input>
  );
}

export default TableInput;