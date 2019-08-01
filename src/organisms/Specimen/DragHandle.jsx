import Draggable from 'react-draggable';

export const DragHandle = (props) => {
  const {
    className,
    side,
    onStart,
    onStop,
    onDrag,
    isActive,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Specimen__drag-handle',
    `Specimen__drag-handle--${side}`,
    isActive && 'is-active',
    className
  ]);

  const dragReturn = (value) => side === 'left' ? value : (-1 * value);

  return (
    <Draggable
      axis='x'
      position={side === 'left' ? { x: 0 } : {}}
      onStart={() => onStart()}
      onStop={() => onStop()}
      onDrag={(e, { x }) => onDrag(dragReturn(x))}
    >
      <div className={stack} {...rest}>
        <div className="Specimen__drag-handle__inner" />
      </div>
    </Draggable>
  );
};

DragHandle.propTypes = {
  className: PropTypes.string,
  side: PropTypes.oneOf(['left', 'right'])
};

export default DragHandle;

