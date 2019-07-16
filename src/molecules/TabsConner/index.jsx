import Cells from '@molecules/TabsConner/Cells';
import Content from '@molecules/TabsConner/Content';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      isFocused: false
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateFocus = this.updateFocus.bind(this);
  }

  updateFocus (state) {
    this.setState({
      isFocused: state,
      focusedIndex: state ? this.state.active : -1
    });
  };

  onKeypress (key) {
    switch(key) {
      case 37 : // onLeftArrow... 
        this.state.focusedIndex === 0 ?
          this.setState({
            focusedIndex: this.state.size
          })
          : 
          this.setState({
            focusedIndex: (this.state.focusedIndex - 1)
          })
        break;
      case 39 : // RIGHT ARROW
        this.state.focusedIndex === this.state.size ?
          this.setState({
            focusedIndex: 0
          })
          : 
          this.setState({
            focusedIndex: (this.state.focusedIndex + 1)
          })
        break;
      case 13 : // ENTER
        this.setState({
          active: this.state.focusedIndex
        });
        break;
      default : /* Other keys, do nothing */
        break;
      }
  }

  componentDidMount () {
    this.setState({
      size: (this.props.headings.length - 1)
    });
  };

  updateIndex (index) {
    this.setState({
      active: index,
      focusedIndex: index
    });
  };

  render () {
    const {
      className,
      headings,
      children,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'TabsConner',
      className
    ]);

    return (
      <div className={stack} {...rest}>
        <Cells
          onFocus={() => this.updateFocus(true)}
          onBlur={() => this.updateFocus(false)}
          onKeyDown={(e) => {
            e.preventDefault();
            this.onKeypress(e.keyCode)
          }}
          tabIndex="0"
          updater={this.updateIndex}
          activeIndex={this.state.active}
          focusedIndex={this.state.focusedIndex}
          headings={this.props.headings}
        />
        <Content activeIndex={this.state.active}>
          {children}
        </Content>
      </div>
    );
  }
};

export default Tabs;
