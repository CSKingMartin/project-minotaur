import Card from '@atoms/Card';
import Heading from '@atoms/Heading';
import Image from '@atoms/Image';
import Label from '@atoms/Label';

import ReactResizeDetector from 'react-resize-detector';

export class PageLinkCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.sizer = React.createRef(); // used to measure size!

    this.iframe = this.iframe.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onWidthChange = this.onWidthChange.bind(this);
  }

  onWidthChange() {
    console.log(this.sizer);
  }

  onHover() {
    this.setState({
      active: true
    });
  }

  onLeave() {
    this.setState({
      active: false
    });
  }

  iframe(data) {
    const obj = {
      __html: data
    };

    return obj;
  }

  render() {
    const {
      className,
      subheading,
      title,
      url,
      children,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'PageLinkCard',
      this.state.active && 'is-active',
      className
    ]);

    const iframeMarkup = `<iframe src="/catalog/atoms/Button" width="100%" height="100%"></iframe>`;

    return (
      <Card
        ref={this.sizer}
        className={stack}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onLeave}
        {...rest}
      >
        <ReactResizeDetector handleWidth onResize={() => this.onWidthChange()} />
        <div className="PageLinkCard__content">
          <Label className="PageLinkCard__subheading">
            {subheading}
          </Label>
          <Heading className="PageLinkCard__title" level="h3">
            {title}
          </Heading>
        </div>
        <div className="PageLinkCard__curtain" />
        <div className="PageLinkCard__panel"
          dangerouslySetInnerHTML={this.iframe(iframeMarkup)}
        />
      </Card>
    );
  }
};

export default PageLinkCard;
