import Icon from '@atoms/Icon';
import Label from '@atoms/Label';

import { useRef } from 'react';

export const Select = (props) => {
  const {
    className,
    options,
    label,
    onChange,
    size,
    name,
    ...rest
  } = props;

  const [isOpen, openPanel] = useState(false);
  const [value, updateValue] = useState(options[0].value);
  const [selectedIndex, updateIndex] = useState(0);

  const inputEl = useRef(null);

  const onSelect = (index) => {
    updateValue(options[index].value);
    openPanel(!isOpen);
    updateIndex(index);
    const fakeEvent = {};
    fakeEvent.target = {};
    fakeEvent.target.value = options[index].value;

    onChange(fakeEvent);
  };

  const stack = utilities.createClassStack([
    'Select',
    isOpen && 'is-open',
    `Select--${size}`,
    className
  ]);

  const handleOptions = () => {
    if (options) {
      return (
        <React.Fragment>
          {options.map((option, index) =>
            <span
              key={index}
              className={index === selectedIndex ? 'Select__panel-option is-active' : 'Select__panel-option'}
              onClick={() => onSelect(index)}
            >
              {option.label}
            </span>
          )}
        </React.Fragment>
      )
    } else {
      return (<p>No options provided</p>);
    }
  };

  const handleChange = (e) => {
    console.log('y');
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={stack} {...rest}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="Select__control" onClick={() => openPanel(!isOpen)}>
        <p>{options[selectedIndex].label}</p>
        <Icon className="Select__control-icon" name="chevron-right" />
      </div>
      {isOpen &&
        <div className="Select__panel">
          {handleOptions()}
        </div>
      }
      <input ref={inputEl} value={value} id={name} name={name} type="hidden" />
    </div>
  );
};

Select.defaultProps = {
  options: [],
  size: 'default'
};

Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  size: PropTypes.oneOf(['default', 'auto', 'small', 'large']),
  onChange: PropTypes.func
};

export default Select;
