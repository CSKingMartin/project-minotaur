const ToggleExample= (props) => {
  return(<div>
    {props.isActive ? 
      <p className="Toggle__on">Toggle switch "ON"</p> :
      <p className="Toggle__off">Toggle switch "OFF"</p>
    }     
  </div>)
};

export class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.defaultValue ? this.props.defaultValue : false
    };
    this.toggleSwitch = this.toggleSwitch.bind(this);
  };

  toggleSwitch(){
    /* This function is equivalent to function being used:
    this.state.isActive ? this.setState({ isActive: false }) : this.setState({ isActive: true}); 
    */
    this.setState({ isActive: !this.state.isActive })
  };

  render(){
    const {
      onChange
    } = this.props
    return(
      <React.Fragment>
        <div className="Toggle" ref={this.toggleRef}>
          <label> 
          False
            <input  
              type="checkbox"
              onChange={this.toggleSwitch}
              checked={this.state.isActive}
              onClick={this.props.onClick}
            >
            </input>
          <span className="lever"></span>
          True
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
}

export default Toggle;

