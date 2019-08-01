import Label from '@atoms/Label';

const Toggle = (props) => {
  const {
    className,
    onChange,
    onClick,
    startActive,
    label,
    ...rest
  } = props;

  const [isActive, toggleSwitch] = useState(startActive);

  const handleClick = (props) => {
    toggleSwitch(!isActive);

    if (onChange) {
      onChange(!isActive); // pass !isActive 'cause that value hasn't changed yet
    }
  };

  const stack = utilities.createClassStack([
    'Toggle',
    isActive && 'is-active',
    className
  ]);

  return (
    <div className={stack} onClick={() => handleClick()} {...rest}>
      <input
        type="checkbox"
        role="switch"
        aria-checked={isActive}
      >
      </input>
      <Label className="Toggle__label">
        <span className="Toggle__lever"></span>
        {label}
      </Label>
    </div>
  )
};

Toggle.defaultProps = {
  startActive: false
};

Toggle.propTypes = {
  isActive: PropTypes.bool,
  onChange: PropTypes.func
};

export default Toggle;
