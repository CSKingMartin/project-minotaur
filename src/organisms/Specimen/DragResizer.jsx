import Draggable from 'react-draggable';

/* eslint-disable-next-line */
export const SpecimenHead = () => <React.Fragment />;

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      activeDragger: false
    };

    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  componentDidUpdate({ maxWidth: prevMaxWidth, screenWidth: prevScreenWidth }) {
    const { maxWidth, screenWidth } = this.props;

    // when the screen is resized or max width is changes by the resizer
    // the offset position of the drag handlers should be updated
    if (prevScreenWidth !== screenWidth || prevMaxWidth !== maxWidth) {
      const offset = (maxWidth <= screenWidth && maxWidth !== Infinity) ? (screenWidth - 32) / 2 - maxWidth / 2 : 0;

      this.setState({ offset }) // eslint-disable-line
    }
  }

  handleDrag(_, { x }) {
    const { screenWidth } = this.props;
    const { handleResize } = this.props;

    const offset = Math.abs(x);
    const newWidth = screenWidth - (offset * 2);

    // 32 is left/right padding, this should probably be calculated
    handleResize({
      width: newWidth < screenWidth ? newWidth - 32 : Infinity
    });
  }

  handleDragStart(side) {
    this.setState({ activeDragger: side });
  }

  handleDragStop() {
    this.setState({ activeDragger: false });
  }

  render() {
    const { offset, screenWidth, activeDragger } = this.props;

    return (
      <div>
        <Draggable
          axis="x"
          onDrag={this.handleDrag}
          handle=".Drag__handle"
          onStart={() => this.handleDragStart('left')}
          onStop={() => this.handleDragStop()}
          position={{ x: offset, y: 0 }}
          bounds={{
            left: 0,
            right: (screenWidth / 2) - 120
          }}
        >
          <div className={utilities.createClassStack([
            'Drag',
            'Drag--left'
          ])}
          >
            <div className={utilities.createClassStack([
              'Drag__handle',
              activeDragger === 'left' && 'is-active'
            ])}
            />
          </div>
        </Draggable>

        <Draggable
          axis="x"
          onDrag={this.handleDrag}
          handle=".Drag__handle"
          onStart={() => this.handleDragStart('right')}
          onStop={() => this.handleDragStop()}
          position={{ x: -1 * offset, y: 0 }}
          bounds={{
            left: -1 * ((screenWidth / 2) - 120),
            right: 0
          }}
        >
          <div className={utilities.createClassStack([
            'Drag',
            'Drag--right'
          ])}
          >
            <div className={utilities.createClassStack([
              'Drag__handle',
              activeDragger === 'right' && 'is-active'
            ])}
            />
          </div>
        </Draggable>
      </div>
    );
  }
}

Preview.propTypes = {
  maxWidth: PropTypes.number,
  screenWidth: PropTypes.number,
  offset: PropTypes.number,
  activeDragger: PropTypes.string,
  handleResize: PropTypes.func
};

export default Preview;
