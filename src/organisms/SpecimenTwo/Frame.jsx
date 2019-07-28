import cache from '@catalog/bundle';
import ReactDOM from 'react-dom';
import { memo } from 'react';

export class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propState: this.props.propState
    }

    this.frame = React.createRef();
    this.updatePropState = this.updatePropState.bind(this)
   
  };

  componentDidMount() {
    this.handleLoad();
    // this.setState({propState: this.props.propState })
  }


  componentDidUpdate(prevProps, prevState){
    // let newProps = this.props.propState
    // console.log(prevState)
    // if(newProps !== prevState ) {
    //  this.updatePropState(newProps)
    // }
  }
 
  updatePropState(newState){
    this.setState({propState: newState})
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
  // console.log(this.state)
    // const {
    //   component,
    //   options,
    //   children,
    //   ...rest
    // } = this.props;

    const queryLiteral = `./${this.props.component}/index.jsx`;
    let ImportedComponent = cache[queryLiteral].default;

    /*
      1.  The 'Dynamic' component render pattern / lifecycle is really ambigious
      2.  We know our value up to the 'DynamicComponent' is working
      3.  Best guess: we need to store the previous props, find differences
          between it and the new props, and run a forceUpdate() or another function
          like that in order to solve.
    */

    let DynamicComponent = () => (
      <ImportedComponent {...this.props.propState}>
        Lorem ipsum
      </ImportedComponent>
    );

    return (
      <div className="Specimen__iframe-wrapper">
        <p className={this.iframeRoot ? 'Specimen__iframe-loading is-active' : 'Specimen__iframe-loading' }>...loading...</p>
        <iframe srcDoc={`<!DOCTYPE html>`} className="Specimen__iframe" ref={this.frame}>
          {this.iframeHead && ReactDOM.createPortal(<link rel="stylesheet" href="/_next/static/css/styles.chunk.css" />, this.iframeHead)}
          {this.iframeRoot && ReactDOM.createPortal(<DynamicComponent />, this.iframeRoot)}
        </iframe>
      </div>
    );
  };
};

export default Frame;
