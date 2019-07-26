import {default as ReactSelect} from 'react-select';
import Label from '@atoms/Label';

export const Select = (props) => {
 const {
    className,
    children,
    label,
    options,
    test,
    onSelect,
    propName,
    ...rest
  } = props;

  const state = {
    selectedOption: options[0]
  };

  const [selected, setSelected] = useState(options[0]);

  const handleChange = (selectedOption) => {
    state.selectedOption = selectedOption;
    setSelected(state.selectedOption);
    props.onSelect(selectedOption.value, props.propName)
  };

  const { selectedOption } = state.selectedOption;

  return(
    <div className={className} {...rest}>
      <ReactSelect
        className="Select"
        defaultValue={options[0]}
        name="select-options"
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}

export default Select;
