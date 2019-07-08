import Cell from './Cell';

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
    this.setBlur = this.setBlur.bind(this);
        // this.setFocus = this.setFocus.bind(this)

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
    if(event.charCode === 13) {
      this.setState({ focused: true });
    }
    if((event.charCode === 27) || (event.charCode === 9)){
      this.setState({ focused: false })
    }
    console.log("focus state", this.state.focused)
  }

  setBlur(){
    // this.setState({ focused: true });
    console.log("Panel Blur");
  }

  render() {
    const {
      className,
      labels,
      children,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'Tabs__panel',
      className
    ]);

    return (
      <div 
        {...rest}
        aria-label={"Tab List"}
        className={stack} 
        onKeyPress={this.setFocus}
        role={"tablist"}
        tabIndex={0}
      >
          <div
            className="Tabs__panel-inner"
            onMouseLeave={() => this.clearHoverStyles()}
          >
          {labels.map((label, i) => {
            return (
              <Cell
                key={i}
                className={i === this.state.active ? 'is-active' : ''}
                hoverHandler={() => this.handleHover(i)}
                onClick={() => this.setActive(i)}
                
              >{label}</Cell>
            );
          })}
          <div className="Tabs__panel-bar">
            {labels.map((i) => {
              const highlightStack = utilities.createClassStack([
                'Tabs__panel-highlight',
                i === this.state.hovered && 'has-hover'
              ])

              return <span key={i} className={highlightStack} />;
            })}
            <div className="Tabs__panel-marker" style={{ transform: `translateX(${(4.875 * this.state.marker)}rem)` }}/>
          </div>
        </div>
      </div>
    );
  }
};

Panel.propTypes = {
  labels: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Panel;
