export class Toggle extends React.Component {
  constructor (props) {
    super(props):

    this.state = {
      isActive: this.props.isActive || false
    };
  };

  render () {
    return (
      <div>Toggle</div>
    );
  }
};

export default Toggle;
