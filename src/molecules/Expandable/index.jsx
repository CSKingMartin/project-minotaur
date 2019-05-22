class Expandable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  render () {
    const {
      className,
      children
    } = this.props;

    const {
      isExpanded
    } = this.state;

    const stack = utilities.createClassStack([
      'Expandable',
      this.state.isExpanded && 'is-expanded',
      className
    ]);

    return (
      <div className={stack}>{children}</div>
    );
  };
};

export default Expandable;
