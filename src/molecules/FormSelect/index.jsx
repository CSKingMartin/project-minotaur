import Select from 'react-select';
import { useState } from 'react';

export const FormSelect = (props) => {

 const {
    className,
    options,
    ...rest
  } = props;

 
  const stack = utilities.createClassStack([
    'FormSelect',
    className
  ]);

  let state = {
    selectedOption: props.options[0]
  }

  const [selected, setSelected] = useState(props.options[0])


  function handleChange(selectedOption){  
    state.selectedOption = selectedOption 
    setSelected(state.selectedOption) 
  }
  
  let { selectedOption } = state.selectedOption;

  return(
    <div>
    <Select  
      name="select-options"
      instanceId={"FormSelected"} 
      options={props.options}
      className
      defaultValue={props.options[0]}
      onChange={handleChange }
   />
  { /*<p>
     You chose: {selected.label}
   </p>*/}
   
    </div>
  )
}

export default FormSelect;