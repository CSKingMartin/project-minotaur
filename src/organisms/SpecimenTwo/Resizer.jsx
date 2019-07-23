import DragHandle from '@organisms/SpecimenTwo/DragHandle';

const ResizerBar = (props) => {
  const {
    className,
    onClick,
    width,
    ...rest
  } = props;

  const ResizerButton = (props) => {
    const {
      label,
      number,
      ...rest
    } = props;

    console.log(number, width);

    const [isHovered, onHover] = useState(false);

    const buttonStack = utilities.createClassStack([
      'Specimen__resizer-button',
      (isHovered && hoveredButton === number) && 'is-active',
      className
    ]);

    if (number <= width) {
      return (
        <button className={stack} onClick={() => onClick(number)} {...rest}>{`${label} - ${number}px`}</button>
      );
    } else {
      return null;
    }
  }

  return (
    <div
      className="Specimen__resizer-bar" {...rest}
      onMouseEnter={() => onHover(true)};
      onMouseLeave={() => onHover(false)};
    >
      <ResizerButton
        className={} style={{ width: '2560px', zIndex: 5 }} label="4k" number={2560} />
      <ResizerButton
        className={} style={{ width: '1440px', zIndex: 6 }} label="Laptop Large" number={1440} />
      <ResizerButton
        className={} style={{ width: '1280px', zIndex: 7 }} label="Laptop Medium" number={1280} />
      <ResizerButton
        className={} style={{ width: '1024px', zIndex: 8 }} label="Laptop" number={1024} />
      <ResizerButton
        className={} style={{ width: '768px', zIndex: 9 }} label="Tablet" number={768} />
      <ResizerButton
        className={} style={{ width: '425px', zIndex: 10 }} label="Mobile Large" number={425} />
      <ResizerButton
        className={} style={{ width: '375px', zIndex: 11 }} label="Mobile Medium" number={375} />
      <ResizerButton
        className={} style={{ width: '320px', zIndex: 12 }} label="Mobile Small" number={320} />
    </div>
  );
};

export class Resizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      isResizing: false
    };

    this.elem = React.createRef();

    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onClick = this.onClick.bind(this);
  };

  componentDidMount() {
    this.setState(() => ({
      maxWidth: this.elem.current.clientWidth
    }));
  };

  onStart() {
    this.setState(() => ({
      isResizing: true
    }));
  }

  onStop() {
    this.setState(() => ({
      isResizing: false,
      maxWidth: this.state.temporaryWidth,
      temporaryWidth: -1
    }));
  }

  onDrag(x) {
    this.setState(() => ({
      offset: x,
      temporaryWidth: this.state.maxWidth - (x * 2)
    }));
  }

  onClick(value) {
    this.setState(() => ({
      temporaryWidth: value,
      maxWidth: value  
    }));
  }

  render() {
    const {
      className,
      children,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'Specimen__resizer',
      className
    ]);

    return (
      <React.Fragment>
        <div className={stack} style={{maxWidth: this.state.temporaryWidth || 'unset'}} ref={this.elem} {...rest}>
          <DragHandle
            side="left"
            onStart={this.onStart}
            onDrag={this.onDrag}
            onStop={this.onStop}
            isActive={this.state.isResizing}
            position={this.state.offset}
          />
            {children}
          <DragHandle
            side="right"
            onStart={this.onStart}
            onDrag={this.onDrag}
            onStop={this.onStop}
            isActive={this.state.isResizing}
            position={this.state.offset}
          />
        </div>
        <ResizerBar
          onClick={this.onClick}
          width={this.state.temporaryWidth || this.state.maxWidth}
        />
      </React.Fragment>
    );
  }
};

Resizer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Resizer;
