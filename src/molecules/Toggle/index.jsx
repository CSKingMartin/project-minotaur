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
      isActive: false
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
        <div className="Toggle">
          <label> 
          OFF
            <input  
              type="checkbox"
              onChange={this.toggleSwitch}
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
}

export default Toggle;

