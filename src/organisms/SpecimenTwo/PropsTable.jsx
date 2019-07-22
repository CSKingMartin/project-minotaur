import registry from '@catalog/registry.json';
import TextArea from '@atoms/TextArea';
import Toggle from '@molecules/Toggle';
import Select from '@molecules/Select';
import Input from '@molecules/Input';
 

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

  const getProps = registry[query].props
  // const getDefaultProps = registry[query]. => defaultProps not listed in registry?

  const separateByPropType = (type) => {
    if (typeof(type) !== 'object') {
      switch(type){
        case 'string':
          return <Input />
        case 'node' :
          return <Input />;
        case 'node.isRequired' :
          return <Input />;
        case 'oneOf':
          return <Select />;
        case 'bool':
          return <Toggle />;
        case 'object' :
          return "object";
        default : 
          return "default return";
      } 
    } else 
    console.log(getOptionsForSelect(type))
    return <Select options={getOptionsForSelect(type)}/>
  }

  // checking for PropTypes.object
  const checkPropType = (type) => {
    if (typeof(type) === 'object') {
      let typeKey = Object.keys(type);
      // let typeValues = Object.values(type).join(' ');
      return typeKey 
    }
    else return type;
  };

  const mapGetProps = () => {
    return Object.keys(getProps).map((prop,index) => {
      return (
        <div key={index} className="wrapper">
          <span  className="key-column">{getProps[prop].name}: </span>
          <span className="value-column" >{checkPropType(getProps[prop].type)}</span>
          <span className="input-column" >{separateByPropType(getProps[prop].type)}</span>
        </div>
      );
    });
  };

  const getOptionsForSelect = (type) => {
    let keys = Object.keys(type).toString();
    let values = Object.values(type)[0];
    let newArray = [];
    values.forEach(function(value){
      newArray.push({value: value, label: value})
    })
    return newArray;
  }

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
