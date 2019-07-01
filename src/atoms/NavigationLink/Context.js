export const HeaderContext = React.createContext();

export class MyProvider extends Component {
  state = {
    name: 'Dannon'
  };

authenticate = () => {
    this.setState({
      name: 'Aaron'
    });
  };

render() {
    return (
      <HeaderContext.Provider
        value={{
          state: this.state,
          name: this.name
        }}
      >
        {this.props.children}
      </HeaderContext.Provider>
    );
  }
}
