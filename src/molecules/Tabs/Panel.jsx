import Cell from './Cell';
import TabsContext from './TabsContext'
import {withTabContext} from './withTabContext';

export class Panel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      marker: 0,
      hovered: -1,
      focused: false
    };
    this.clearHoverStyles = this.clearHoverStyles.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.setFocus = this.setFocus.bind(this);
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

  setFocus(event) {
    switch(event.key) {
      case 'Enter' :
      //enable Tabs to be 'tab-able through'
       return this.setState({focused: true});
      case 'Escape' :
        return this.setState({focused: false})
      default : 
        return;
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
        {...rest}
        aria-labelledby="tab-list"
        className={stack} 
        id="tab-list"
        onKeyDown={this.setFocus}
        role={"tablist"}
      >
          <div
            className="Tabs__panel-inner"
            onMouseLeave={() => this.clearHoverStyles()}
            tabIndex={0}
          >
          {labels.map((label, i) => {
            return (
              <Cell
                key={i}
                cellIndex={i}
                className={i === this.state.active ? 'is-active' : ''}
                hoverHandler={() => this.handleHover(i)}
                labels={labels}
                onClick={() => {this.setActive(i);
                this.props.context.changeLabelState(i);}}
                panelFocused={this.state.focused}
              >{label}</Cell>
            );
          })}
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
