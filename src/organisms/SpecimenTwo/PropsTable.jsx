import { useState, useEffect, useLayoutEffect } from 'react';
import Button from '@atoms/Button';
import registry from '@catalog/registry.json';
import Input from '@molecules/Input';
import Select from '@molecules/Select';
import TextArea from '@atoms/TextArea';
import Toggle from '@molecules/Toggle';
import TableInput from './props-table-input';
import Resizer from './Resizer'; // local Resizer partial
 
 import Frame from './Frame'; // local Resizer partial


export const PropsTable = (props) => {
  const {
    className,
    children,
    query,
    propName,
    // propState,
    // setPropState,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Specimen2',
    className
  ]);

  const getProps = registry[query].props
  const getDefaultProps = registry[query].defaultProps;

  const updateStateWithDefaultProps = () => {
    let propKeys = Object.keys(getProps).reduce((o, key) => ({...o, [key]: null}),{} )
    Object.keys(propKeys).forEach((key) => {
      Object.keys(getDefaultProps).forEach((defaultKey) => {
        if (key === defaultKey) {
          propKeys[key] = getDefaultProps[defaultKey]
        } 
      })
    })
    // setPropState(propKeys)
    return propKeys
  }
  const [state, setState] = useState(()=> {
    const initialState = updateStateWithDefaultProps();
    // setPropState(initialState)
    return initialState;
  })

  const [propState, setPropState] = useState(()=> {
    const initialState = updateStateWithDefaultProps();
    // setPropState(initialState)
    return initialState;
  })

  const handleChange = (type, event) => {
    let newState = state;
    newState[type] = event.target.value;
    setState(newState);
    setNewPropState;  
  }

  const handleClick = (type, event) => {
    let newState = state;
    newState[type] = event.target.checked;
    setState(newState);
    setPropState(newState) 
  }

  const handleSelect = (type, selected) => {
    let newState = state;
    newState[type] = selected.value;
    setState(newState);
    setPropState(newState)   
    console.log("newState: ",newState, "propState:",propState, "state: ",state)
  }

  // useEffect(()=>{
  //   setPropState(state)
  // }, [state])

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
          return <Toggle 
                    defaultValue={defaultValue} 
                    onClick={()=>handleClick(propName, event)} 
                  />;
        case 'object' :
          return "object";
        default : 
          return "default return";
      } 
    }  
    return getOptionsForSelect(type, propName)
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
  const getOptionsForSelect = (type, propName) => {
    let values = Object.values(type)[0];
    let keys = Object.keys(type).join()
    if (keys === 'oneOf'){
      let optionsArray = [];
      values.forEach(function(value){
        optionsArray.push({value: value, label: value})
      }) 
      return <Select 
                options={optionsArray} 
                type={keys} 
                propName={propName} 
                onSelect={handleSelect}  
              />;
    }
    if (keys === 'oneOfType'){
      let oneOfTypeArray = []
      values.forEach(function(value){
         oneOfTypeArray.push(value)
      }) 
    return oneOfTypeArray.join(' or ')
    }
  }

  const displayMappedObject = mapGetProps();
  return (
    <div className={stack} {...rest} >
    <Resizer>
      <Frame component={query} propState={state} />
      {/* <Frame component={value.query} props={value.props} /> */}
    </Resizer>
      <div>
        <h6>{query}</h6>
        {children}
        {displayMappedObject}
        </div>
    </div>
  );
};

export default PropsTable;
