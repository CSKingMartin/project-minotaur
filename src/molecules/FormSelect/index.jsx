// import FormSelectOption from './FormSelectOption';
import Select from 'react-select';
import { useState } from 'react';

export const FormSelect = (props) => {

 const {
    className,
    children,
    options,
    ...rest
  } = props;

   let state = { 
    selectedOption: options[0]
  };

    const [selected, setSelected] = useState(options[0]);

  function handleChange(selectedOption){
    state.selectedOption = selectedOption;
    setSelected(state.selectedOption);
  };

  let { selectedOption } = state.selectedOption;

  return(
    <div className={className}>
     <Select
        className="FormSelect"
        defaultValue={options[0]}
        name="select-options" 
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}

export default FormSelect;