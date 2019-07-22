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
    return getOptionsForSelect(type)
  }

  // checking for PropTypes.object
  const checkPropType = (type) => {
    if (typeof(type) === 'object') {
      let typeKey = Object.keys(type);
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

  // for oneOf proptype: create options prop to pass into <Select /> 
  // for oneOfType proptype: dont want <Select />, return a string
  const getOptionsForSelect = (type) => {
    let values = Object.values(type)[0];
    if (Object.keys(type).join() === 'oneOf'){
    let optionsArray = [];
    values.forEach(function(value){
      if (typeof(value) !== 'object'){
      optionsArray.push({value: value, label: value})
      }
      else {
        let arrayValue = Object.entries(value).join().split(',')
        optionsArray.push({value: arrayValue, label: arrayValue.join(' ') })
      }
    }) 
    return <Select options={optionsArray} />;
    }
    if (Object.keys(type).join() === 'oneOfType'){
      let oneOfTypeArray = []
      values.forEach(function(value){
        if (typeof(value) !== 'object'){
         oneOfTypeArray.push(value)
        }
        else {
          let arrayValue = Object.entries(value).join().split(',')
          oneOfTypeArray.push(arrayValue.join('-'))
        }
      }) 
    return oneOfTypeArray.join(' or ')
    }
  }

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
