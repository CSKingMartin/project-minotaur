export class DropdownItem extends React.Component{ 
  constructor(props) {
    super(props);
    this.state ={
      listOpen: false
        }
        this.onHover = this.onHover.bind(this);
        this.onLeave = this.onLeave.bind(this)
    }

    onHover() {
      if (!this.state.listOpen) {
        this.setState({ listOpen: true })
      }
    }

    onLeave() {
      if (this.state.listOpen) {
        this.setState({ listOpen: false })
      }
    }
    
    render(){
      const listItems = (
        < div className ="dropdown" >
          {this.props.list.map((item, index) =>
            <p className="list-item" key={index}>{item}</p>
          )}
        </div>)
        
      return( 
        <React.Fragment>
          <div
            className='nav-item'
            onMouseEnter={() => this.onHover()}
            onMouseLeave={() => this.onLeave()}
          >
            <p className="title">{this.props.title}</p>
            { this.state.listOpen ? listItems : null }
          </div> 
      </React.Fragment>
      )
    };
};

DropdownItem.propTypes = {
  dropdownLists: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

export default DropdownItem;