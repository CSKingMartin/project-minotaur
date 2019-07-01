import SearchInput from './SearchInput'

export class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
      }
      this.onSearch = this.bind.onSearch(this);
  }

  onSearch(){

  }

  render() {
    return(
      <React.Fragment>
        <h3>You searched for : <span>{this.props.input}</span></h3>

      </React.Fragment>
    )
  }
}
export default SearchResult;