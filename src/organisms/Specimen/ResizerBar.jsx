import Label from '@atoms/Label';

export const ResizerBar__button = (props) => {
  const {
    className,
    isActive,
    width,
    containerWidth,
    label,
    sendHoverState,
    sendClickedWidth,
    ...rest
  } = props;

  // console.log(containerWidth);

  const buttonStack = utilities.createClassStack([
    'Specimen__resizer-button',
    isActive && 'is-active',
    className
  ]);

  const concatLabel = `${label} - ${width}px`

  if (width <= containerWidth) {
    return (
      <button
        className={buttonStack}
        style={{ width: `${width}px` }}
        aria-label={`Resize to ${width}px`}
        onMouseEnter={() => sendHoverState(true, width, concatLabel)}
        onMouseLeave={() => sendHoverState(false)}
        onClick={() => sendClickedWidth(width)}
        {...rest}
      />
    );
  }
    
  return null;
};

export const ResizerBar = (props) => {
  const {
    className,
    width,
    isActive,
    onClick,
    ...rest
  } = props;

  if (typeof width === 'object') {
    console.log('width: ', width);
  }

  const [label, updateLabel] = useState('');
  const [isHovered, updateHoverStyle] = useState(false);
  const [hoveredButton, updatedHoveredButton] = useState();

  const stack = utilities.createClassStack([
    'Specimen__resizer-bar',
    className
  ]);

  const handleClick = (width) => {
    console.log(width);
    onClick(width);
  };

  const onHover = (bool, width, label) => {
    if (bool) {
      updateLabel(label);
      updateHoverStyle(true);
      updatedHoveredButton(width)
    } else {
      updateLabel('');
      updateHoverStyle(false);
      updatedHoveredButton();
    }
  };

  const sendResize = (width) => onClick(width);

  return (
    <div className={stack} {...rest}>
      <Label className="Specimen__resizer-label">{label}</Label>
      <ResizerBar__button
        width={2560}
        label="4k"
        isActive={isHovered && hoveredButton >= 2560 }
        sendHoverState={onHover}
        sendClickedWidth={() => handleClick()}
        containerWidth={width}
      />
      <ResizerBar__button
        width={1440}
        label="Laptop Large"
        isActive={isHovered && hoveredButton >= 1440 }
        sendHoverState={onHover}
        sendClickedWidth={handleClick}
        containerWidth={width}
      />
      <ResizerBar__button
        width={1280}
        label="Laptop Medium"
        isActive={isHovered && hoveredButton >= 1280 }
        sendHoverState={onHover}
        sendClickedWidth={handleClick}
        containerWidth={width}
      />
      <ResizerBar__button
        width={1024}
        label="Laptop"
        isActive={isHovered && hoveredButton >= 1024 }
        sendHoverState={onHover}
        sendClickedWidth={handleClick}
        containerWidth={width}
      />
      <ResizerBar__button
        width={768}
        label="Tablet"
        isActive={isHovered && hoveredButton >= 768 }
        sendHoverState={onHover}
        sendClickedWidth={handleClick}
        containerWidth={width}
      />
      <ResizerBar__button
        width={425}
        label="Mobile Large"
        isActive={isHovered && hoveredButton >= 425 }
        sendHoverState={onHover}
        sendClickedWidth={handleClick}
        containerWidth={width}
      />
      <ResizerBar__button
        width={375}
        label="Mobile Medium"
        isActive={isHovered && hoveredButton >= 375 }
        sendHoverState={onHover}
        sendClickedWidth={handleClick}
        containerWidth={width}
      />
      <ResizerBar__button
        width={320}
        label="Mobile Small"
        isActive={isHovered && hoveredButton >= 320 }
        sendHoverState={onHover}
        sendClickedWidth={handleClick}
        containerWidth={width}
      />
    </div>
  );
};

export default ResizerBar;
