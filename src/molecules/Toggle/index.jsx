const ToggleExample = (props) => {
  return (
    <div>
    {props.isActive ?
      <p className="Toggle__on">Toggle switch "ON"</p> :
      <p className="Toggle__off">Toggle switch "OFF"</p>
    }
  </div> )
};

export class Toggle extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
  };

  toggleSwitch(){
    this.setState({ isActive: !this.state.isActive })
  };

  componentDidMount(){
    this.setState({ isActive: this.props.isActive })
  }

  render(){
    const {
      onChange,
      onClick
    } = this.props

    return(
      <React.Fragment>
        <div className="Toggle">
          <label>
          OFF
            <input
              type="checkbox"
              onChange={this.toggleSwitch}
              onClick={this.props.onClick}
              checked={this.props.isActive}
            >
            </input>
          <span className="lever"></span>
          ON
          </label>
        </div>
        <ToggleExample isActive={this.state.isActive}/>
      </React.Fragment>
    )
  };
};

Toggle.propTypes = {
  isActive: PropTypes.bool,
  onChange: PropTypes.func
};

export default Toggle;
