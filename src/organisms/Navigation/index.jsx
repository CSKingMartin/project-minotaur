import NavigationLink from '@atoms/NavigationLink'
import NavSearchbar from '@atoms/NavSearchbar';

const list = []

export default class Navigation extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      list,
      color: '#67B8DE',
      secondarycolor: '#E8F8FF',
    };

    this.formChange = this.formChange.bind(this);
    this.removeLink = this.removeLink.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.shadeColor =  this.shadeColor.bind(this);
  }

  formChange(event){
    let headerElement = document.getElementById('MainHeader').value;
    let dropdownElement = document.getElementById('DropDownItems').value;

    /*If dropdownElement is blank, only push the category and empty items array */
    if (dropdownElement === "") {
      this.state.list = this.state.list.push({category: headerElement, items: []});
      this.setState({list: list});
    }
    else {
      dropdownElement = dropdownElement.split(", ");
      this.state.list = this.state.list.push({category: headerElement, items: [dropdownElement]});
      this.setState({list: list});
    }

    event.preventDefault();
  }

  removeLink(){
    this.state.list = this.state.list.splice(-1,1);
    this.setState({list: list});
  }

  colorChange(event){
    let colorValue = document.getElementById('ColorHeader').value;
    this.state.color = colorValue;
    this.state.secondarycolor = this.shadeColor(colorValue, 40);
    this.setState({color: this.state.color, secondarycolor: this.state.secondarycolor});
    event.preventDefault();
  }

  shadeColor(color, percent) {
    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R:255;
    G = (G < 255) ? G:255;
    B = (B < 255) ? B:255;

    let RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    let GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    let BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    let finalColor = "#" + RR + GG + BB;
    return finalColor;
  }

  render() {
    return (
    <div>
    <br />
    <div className="Navigation" style={{backgroundColor: this.state.color}}>
          <div className="Left-Side">
            <div className="Equal-Space-Nav">
              <NavigationLink list={list} secondarycolor={this.state.secondarycolor}></NavigationLink>
            </div>
          </div>
          <div className="Right-Side">
            <NavSearchbar name="nav-search-bar" placeholder="search..."></NavSearchbar>
          </div>
        </div>
        {/* This is the form for adding navigation links */}
        <label>
        Add Elements to Navigation
        <form onSubmit={this.formChange}>
          <input name="MainHeader" id="MainHeader" type="text" placeholder="Add Header..."/>
          <br />
          <input name="DropDownItems" id="DropDownItems" type="text" placeholder="Add Dropdown..."/>
          <br />
          <input type="submit" value="Submit" />
        </form>
        </label>
        {/* This is the button for removing the last link added*/}
        <div>
          <button onClick={this.removeLink}>Remove last added link</button>
        </div>
        <br />
        {/* This is the form for changing the color of the navbar*/}
        <label>
        Change Color of Navigation
        <form onSubmit={this.colorChange}>
          <input name="ColorHeader" id="ColorHeader" type="text" placeholder="Change color..."/>
          <br />
          <input type="submit" value="Submit" />
        </form>
        </label>
      </div>
    );
  }
};
