import Cell from './Cell';
import TabsContext from './TabsContext'
import {withTabContext} from './withTabContext';

export class Panel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      marker: 0,
      hovered: -1
    };

    this.clearHoverStyles = this.clearHoverStyles.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  clearHoverStyles() {
    this.setState({ hovered: -1 });
  }

  handleHover(index) {
    this.setState({ hovered: index });
  }

  setActive(index) {
    this.setState({ marker: index });
    this.setState({ active: -1 });
    // delays new border animation
    setTimeout(() => {
      this.setState({ active: index });
    }, 250);
  }

  onKeyPress(e){
    console.log(this.props.labelState);
    let currentIndex = this.state.marker;

    if(currentIndex > 0 && currentIndex < 3){
      switch(e.keyCode) {
        case (e.shiftKey &&  9) :
          this.setActive(currentIndex - 1);
          this.props.context.changeLabelState(currentIndex - 1)
          return;
        case 9 :
          this.setActive(currentIndex + 1);
          this.props.context.changeLabelState(currentIndex + 1)
          return;
        case 37 :
          this.setActive(currentIndex - 1);
          return;
        case 39 :
          this.setActive(currentIndex + 1);
          return;
        case 13 :
          this.props.context.changeLabelState(currentIndex)
          return;
        default :
          return;
      }
    }
    if(currentIndex == 0){
      // should only be able to tab and use right arrow
      switch(e.keyCode) {
        case 9 :
          this.setActive(currentIndex + 1);
          this.props.context.changeLabelState(currentIndex + 1)
          return;
        case 39 :
          this.setActive(currentIndex + 1);
          return;
        case 13 :
          this.props.context.changeLabelState(currentIndex)
          return;
        default :
          return;
      }
    }
    if(currentIndex == 3){
      // should only be able to shift + tab and use left arrow
      switch(e.keyCode) {
        case (e.shiftKey &&  9) :
          this.setActive(currentIndex - 1);
          this.props.context.changeLabelState(currentIndex - 1)
          return;
        case 37 :
          this.setActive(currentIndex - 1);
          return;
        case 13 :
          this.props.context.changeLabelState(currentIndex)
          return;
        default :
          return;
      }
    }
  }

  render() {
    const {
      className,
      children,
      labels,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'Tabs__panel',
      className
    ]);

    return (
      <div
        className={stack}
        onKeyDown={this.onKeyPress}
        tabIndex="0"
        {...rest}
      >
        <div
          className="Tabs__panel-inner"
          onMouseLeave={() => this.clearHoverStyles()}
        >
          {
            labels.map((label, i) => {
              return (
                <Cell
                  key={i}
                  className={i === this.state.active ? 'is-active' : ''}
                  hoverHandler={() => this.handleHover(i)}
                  onClick={() => {this.setActive(i); this.props.context.changeLabelState(i);}}
                  ref={`Cell_${i}`}
                >{label}</Cell>
              );
            })
          }
          <div className="Tabs__panel-bar">
            {
              labels.map((i) => {
                const highlightStack = utilities.createClassStack([
                  'Tabs__panel-highlight',
                  i === this.state.hovered && 'has-hover'
                ])
                return <span key={i} className={highlightStack} />;
              })
            }
            <div className="Tabs__panel-marker" style={{ transform: `translateX(${(4.875 * this.state.marker)}rem)` }}/>
          </div>
        </div>
      </div>
    );
  }
};

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  labels: PropTypes.array
}

export default withTabContext(Panel);
