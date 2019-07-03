import Frame from 'react-frame-component';
import DragResizer from './DragResizer';

export const SpecimenHead = () => <React.Fragment />; // eslint-disable-line

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.$iframe = React.createRef();

    this.handleFrameHeight = this.handleFrameHeight.bind(this);
  }

  componentDidMount() {
    this.handleFrameHeight();
  }

  componentDidUpdate(prevProps) {
    const { maxWidth } = this.props;

    if (prevProps.maxWidth !== maxWidth) {
      this.handleFrameHeight();
    }
  }

  handleFrameHeight() {
    const { handleResize } = this.props;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.$iframe.current) {
        const iframe = this.$iframe.current.node;
        const { body } = iframe.contentWindow.document;
        const height = body.scrollHeight + 32;

        iframe.height = '';
        iframe.height = height;

        handleResize({ height });
      }
    });
  }

  /* eslint-disable */

  renderChildren(children, context) {
    // this is causing infinite rendering on each frame
    return typeof children === 'function' ? children(context) : children;
  }

  /* eslint-enable */

  render() {
    const {
      Head = SpecimenHead, // eslint-disable-line
      maxWidth,
      screenWidth,
      handleResize,
      hideResizer,
      darkMode,
      children
    } = this.props;

    return (
      <div className="Preview">
        <div className="Preview__frame-wrapper" style={{ maxWidth: maxWidth === Infinity ? undefined : `${maxWidth}px` }}>
          {/* eslint-disable */}
          <StatefulContext.Consumer>
            {
              (context) => (
                <Frame
                  ref={this.$iframe}
                  sandbox="allow-scripts allow-same-origin allow-top-navigation"
                  head={<link rel="stylesheet" href="/_next/static/css/styles.chunk.css" />}
                  className={utilities.createClassStack(['Preview__preview-frame', darkMode && 'Preview__preview-frame--dark'])}
                  contentDidMount={this.handleFrameHeight}
                  contentDidUpdate={this.handleFrameHeight}
                >
                  {this.renderChildren(children, context)}
                </Frame>
              )
            }
          </StatefulContext.Consumer>
          {/* eslint-enable */}
        </div>
        {
          !hideResizer
          && (
            <DragResizer
              maxWidth={maxWidth}
              screenWidth={screenWidth}
              handleResize={handleResize}
            />
          )
        }
      </div>
    );
  }
}

Preview.propTypes = {
  Head: PropTypes.any,
  maxWidth: PropTypes.number,
  screenWidth: PropTypes.number,
  handleResize: PropTypes.func,
  hideResizer: PropTypes.bool,
  darkMode: PropTypes.bool,
  children: PropTypes.any
};

Preview.defaultValue = {
  Head: SpecimenHead
};

export default Preview;
