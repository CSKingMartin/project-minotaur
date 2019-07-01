import Navigation from '@organisms/Navigation'
import NavigationLink from '@atoms/NavigationLink'

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let value = this.context.category;
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="Add Header..." onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default Input;
