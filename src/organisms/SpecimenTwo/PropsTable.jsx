import { useState, useEffect } from 'react';
import Button from '@atoms/Button';
import registry from '@catalog/registry.json';
import Input from '@molecules/Input';
import Select from '@molecules/Select';
import TextArea from '@atoms/TextArea';
import Toggle from '@molecules/Toggle';
import TableInput from './props-table-input';
 

export const PropsTable = (props) => {
  const {
    className,
    children,
    query,
    propName,
    newProps,
    setProps,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Specimen2',
    className
  ]);

  const getProps = registry[query].props
  const getDefaultProps = registry[query].defaultProps;
  const [state, setState] = useState(getProps);
  const [value, setValue] = useState('')

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

  const handleChange = (type, event) => {
    let newValue = event.target.value;
    let newState = state;
    setValue(event.target.value);
    newState[type] = newValue;
    setState(newState);
    setProps(state)
    // console.log("newProps", newProps)
    
  }

  useEffect(() => {
    setState(updateStateWithDefaultProps(getDefaultProps, state));
  }, []);
  

  const separateByPropType = (type, defaultValue, propName) => {
    let tableInput = (
      <input 
        onChange={()=>handleChange(propName, event)} 
        placeholder={defaultValue} 
        name={propName}  
      />)
 
    if (typeof(type) !== 'object') {
      switch(type){
        case 'string':
          return tableInput;
        case 'node' :
          return tableInput;
        case 'node.isRequired' :
          return tableInput;
        case 'bool':
      return <Toggle />;
        case 'object' :
          return "object";
        default : 
          return "default return";
      } 
    }  
    return getOptionsForSelect(type)
  }

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

  // 'oneOf' proptype returns <Select />  &&  oneOfType returns a string
  const getOptionsForSelect = (type) => {
    let values = Object.values(type)[0];
    if (Object.keys(type).join() === 'oneOf'){
      let optionsArray = [];
      values.forEach(function(value){
        optionsArray.push({value: value, label: value})
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
  console.log(state)
 
  
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
