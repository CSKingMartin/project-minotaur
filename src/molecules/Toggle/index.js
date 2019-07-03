import ToggleExample from './ToggleExample.jsx';

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
    if(this.props.onChange){
      this.props.onChange();
    };
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
        <Toggle.Example
          toggle={this.state.isActive}
         />
      </React.Fragment>
    )
  };
};

Toggle.Example=ToggleExample;
export default Toggle;