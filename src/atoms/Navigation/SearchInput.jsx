import DropdownItem from "./DropdownItem";
import SearchResult from "./SearchResult";

export class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      input: ""
    }
    this.onSearchInput = this.onSearchInput.bind(this)
  }

  onSearchInput(event){
    let input = event.target.value
    this.setState({input: input})
    this.setState({change: true})
  }

  // onFindMatch(){
  //   dropdownLists.forEach(item)  {
  //     if (item.list = this.state.input){
  //       console.log("loop works")
  //     }
  //     else{
  //       console.log("not working")
  //     }
  //   }
  // }


  render() {
    return(
      <React.Fragment>
      <form className="search-input" >
        <input  type="text" className="search-bar" placeholder="Search..." onChange={this.onSearchInput}></input>
      </form>
      {/*<SearchResult />*/}
      <h6 className="search-result">You searched for: {this.state.input}</h6>
      </React.Fragment>
    );
  }
};

export default SearchInput;