import DragHandle from '@organisms/SpecimenTwo/DragHandle';

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
    );
  }
};

Resizer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Resizer;
