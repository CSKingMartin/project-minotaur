import cache from '@catalog/bundle';
import ReactDOM from 'react-dom';

export class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.frame = React.createRef();
  };

  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    if (this.frame.current) {
      this.iframeHead = this.frame.current.contentDocument.head;
      this.iframeRoot = this.frame.current.contentDocument.body;

      this.forceUpdate();
    } else {
      setTimeout(handleLoad(), 500);
    }
  }

  render() {
    const {
      component,
      options,
      children,
      ...rest
    } = this.props;

    const queryLiteral = `./${component}/index.jsx`;
    const ImportedComponent = cache[queryLiteral].default;

    const DynamicComponent = () => (
      <ImportedComponent>
        Lorem ipsum
      </ImportedComponent>
    );

    return (
      <div className="Specimen__iframe-wrapper">
        <p className={this.iframeRoot ? 'Specimen__iframe-loading is-active' : 'Specimen__iframe-loading' }>...loading...</p>
        <iframe srcDoc={`<!DOCTYPE html>`} className="Specimen__iframe" ref={this.frame} {...rest}>
          {this.iframeHead && ReactDOM.createPortal(<link rel="stylesheet" href="/_next/static/css/styles.chunk.css" />, this.iframeHead)}
          {this.iframeRoot && ReactDOM.createPortal(<DynamicComponent />, this.iframeRoot)}
        </iframe>
      </div>
    );
  };
};

export default Frame;
