export class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.toggleSwitch = this.toggleSwitch.bind(this);
  };

  componentDidMount(){
    const {
      onChange
    } = this.props
  };

  toggleSwitch(){
    this.state.isActive ? this.setState({ isActive: false }) : this.setState({ isActive: true});
    if(this.props.onChange){
      this.props.onChange
    };
  };

  render(){
    return(
      <React.Fragment>

        <div className="switch">
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
      </React.Fragment>
    )
  };
};

export default Toggle;