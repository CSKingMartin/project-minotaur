import { useState, useEffect } from 'react';
import Button from '@atoms/Button';
import registry from '@catalog/registry.json';
import Input from '@molecules/Input';
import Select from '@molecules/Select';
import TextArea from '@atoms/TextArea';
import Toggle from '@molecules/Toggle';
 

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
  const getDefaultProps = registry[query].defaultProps;
  const [state, setState] = useState(getProps);

  const updateStateWithDefaultProps = (getDefaultProps,state) => {
    let propState = Object.keys(state).reduce((o, key) => ({...o, [key]: ''}),{} )
    Object.keys(propState).forEach((key) => {
      Object.keys(getDefaultProps).forEach((defaultKey) => {
        if (key === defaultKey) {
          propState[key] = getDefaultProps[defaultKey]
        } 
      })
    })
    return propState
  }

  const handleChange = (event,propName) => {
    setState(state[propname] = event.target.value )
  }

  useEffect(() => {
    setState(updateStateWithDefaultProps(getDefaultProps, state))
  }, [])

  const separateByPropType = (type, defaultValue, propName) => {
    if (typeof(type) !== 'object') {
      switch(type){
        case 'string':
          return <Input placeholder={defaultValue} />
        case 'node' :
          return <Input placeholder={defaultValue} propname={propName} onChange={() => handleChange(propName)}/>;
        case 'node.isRequired' :
          return <Input placeholder={defaultValue}  propname={propName}/>;
        case 'oneOf':
          return <Select />;
        case 'bool':
      return <Toggle defaultActive={defaultValue} propname={propName}  />;
        case 'object' :
          return "object";
        default : 
          return "default return";
      } 
    }  
    return getOptionsForSelect(type)
  }

  // checking for PropTypes.object
  const checkPropType = (type) => {
    if (typeof(type) === 'object') {
      return Object.keys(type) 
    }
    else return type;
  };

  const mapGetProps = () => {
    return Object.keys(getProps).map((prop,index) => {
      return (
        <div key={index} className="wrapper">
          <span  className="key-column">{getProps[prop].name}: </span>
          <span className="value-column" >{checkPropType(getProps[prop].type)}</span>
          <span className="input-column" >{separateByPropType(getProps[prop].type, getDefaultProps[prop], getProps[prop].name) }</span>
        </div>
      );
    });
  };

  // This func is looking at object propTypes specifically
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
         oneOfTypeArray.push(value)
      }) 
    return oneOfTypeArray.join(' or ')
    }
  }

  const displayMappedObject = mapGetProps();
  // console.log("state change", state)
  
  return (
    <div className={stack} {...rest} >
    <form onSubmit={() => handleSubmit}>
      <div>
        <h6>{query}</h6>
        {children}
        {displayMappedObject}
        </div>
      </form>
    </div>
  );
};

export default PropsTable;
