import Cells from '@molecules/TabsTwo/Cells';
import Content from '@molecules/TabsTwo/Content';

const Panel = (props) => {
  const {
    headings,
    children,
    ...rest
  } = props;

  return (
    <div className="Tabs__panel" {...rest}>{children}</div>
  );
};

export class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };

    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex (index) {
    this.setState({
      active: index
    });
  };

  render () {
    const {
      className,
      headings,
      children,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'Tabs',
      className
    ]);
    return (
      <div className={stack} {...rest}>
        <Cells
        updater={this.updateIndex}
        activeIndex={this.state.active}
        headings={this.props.headings}
      />
        <Content activeIndex={this.state.active}>
          {children}
        </Content>
      </div>
    );
  }
};

// Tabs.Content = Content;
// Tabs.Panel = Content;

export default Tabs;
