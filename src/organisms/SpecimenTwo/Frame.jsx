import cache from '@catalog/bundle';
import ReactDOM from 'react-dom';
import Button from '@atoms/Button';

export class Frame extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.node.addEventListener('load', this.handleLoad());
  }

  componentWillUnmout() {
    this.node.removeEventListener('load', this.handleLoad());
  }

  handleLoad() {
    this.iframeHead = this.node.contentDocument.head;
    this.iframeRoot = this.node.contentDocument.body;
    this.forceUpdate();
  }

  render() {
    const {
      component,
      options,
      children,
      ...rest
    } = this.props;

    const queryLiteral = `./${component}/index.jsx`;
    const DynamicComponent = cache[queryLiteral].default;

    return (
      <div className="Specimen__iframe-wrapper">
        <p className={this.iframeRoot ? 'Specimen__iframe-loading is-active' : 'Specimen__iframe-loading' }>...loading...</p>
        <iframe srcDoc={`<!DOCTYPE html>`} className="Specimen__iframe" ref={node => this.node = node} {...rest}>
          {this.iframeHead && ReactDOM.createPortal(<link rel="stylesheet" href="/_next/static/css/styles.chunk.css" />, this.iframeHead)}
          {this.iframeRoot && ReactDOM.createPortal(<DynamicComponent />, this.iframeRoot)}
        </iframe>
      </div>
    );
  };
};

export default Frame;
