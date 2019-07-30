import {default as ReactSelect} from 'react-select';
import Label from '@atoms/Label';
import React, { useState, useEffect } from 'react';
import Wrapper from '@atoms/Wrapper'

export const Select = (props) => {
 const {
    className,
    options,
    onSelect,
    propName,
    ...rest
  } = props;

  const [selected, setSelected] = useState(options[0]);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    props.onSelect(selectedOption.value, props.propName)
  };

  return(
    <span>
      <ReactSelect
        defaultValue={selected}
        instanceId={selected}
        name="select-options"
        onChange={handleChange}
        options={options}
        value={selected}
        {...rest}
      />
    </span>
  );
}

Select.defaultProps = {
  options: [{ value: 'Default', label: 'Default' }],
  onSelect: () => {}
};

Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func
};

export default Select;
