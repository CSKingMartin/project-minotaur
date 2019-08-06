import cache from '@catalog/bundle';
import ReactDOM from 'react-dom';

import Button from '@atoms/Button';
import Wrapper from '@atoms/Wrapper';

export class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.frame = React.createRef();
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    console.log('working');
    this.forceUpdate();
  }

  render() {
    const {
      componentName,
      componentProps,
      ...rest
    } = this.props;

    const queryLiteral = `./${this.props.componentName}/index.jsx`;
    let ImportedComponent = cache[queryLiteral].default;

    let DynamicComponent = () => (
      <ImportedComponent {...componentProps} />
    );

    return (

      <div className="Specimen__iframe-wrapper" {...rest}>
        <iframe srcDoc={`<!DOCTYPE html>`} className="Specimen__iframe" ref={this.frame}>
          {this.iframeHead && ReactDOM.createPortal(<link rel="stylesheet" href="/_next/static/css/styles.chunk.css" />, this.iframeHead)}
          {this.iframeRoot && ReactDOM.createPortal(<DynamicComponent/>, this.iframeRoot)}
        </iframe>
        <Wrapper size="small" className="Specimen__reload-wrapper">
          <p>Something not right?</p>
          <Button onClick={this.handleClick}>Refresh</Button>
        </Wrapper>
      </div>
    );
  };
};

export default Frame;
