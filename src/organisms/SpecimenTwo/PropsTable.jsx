import registry from '@catalog/registry.json';

export const PropsTable = (props) => {
  const {
    className,
    children,
    query,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Specimen2',
    className
  ]);

  const getProps = registry[query].props //gets object containing all element's props

  // checking for PropTypes.object
  const checkPropType = (type) => {
    if (typeof(type) === 'object') {
      let typeKey = Object.keys(type);
      let typeValues = Object.values(type).join(' ');
      return typeKey + ': ' + typeValues
    }
    else return type;
  };

  const mapGetProps = () => {
    return Object.keys(getProps).map((prop,index) => {
      return (
        <div key={index} className="wrapper">
          <span  className="key-column">{getProps[prop].name}: </span>
          <span className="value-column" >{checkPropType(getProps[prop].type)}</span>
        </div>
      );
    });
  };

// //practicing recursion
//   const reverseString = (string) => {
//     if (string === "") {
//       return "";
//     } 
//     else  return reverseString(string.substr(1)) + string.charAt(0);
//   }

  const displayMappedObject = mapGetProps();

  return (
    <div className={stack} {...rest} >
      <h6>{query}</h6>
      {children}
      {displayMappedObject}
    </div>
  );
};

export default PropsTable;
