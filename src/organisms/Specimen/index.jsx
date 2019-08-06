import Badge from '@atoms/Badge';
import Heading from '@atoms/Heading';
import registry from '@catalog/registry.json'
import Rhythm from '@atoms/Rhythm';
import Wrapper from '@atoms/Wrapper';

import PropsTable from './PropsTable'; // local PropsTable partial
import Frame from './Frame'; // local Frame partial
import Resizer from './Resizer'; // local Resizer partial

class Specimen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      props: {} 
    };

    this.update = this.update.bind(this);
    this.formatProps = this.formatProps.bind(this);
  }

  componentDidMount() {
    this.setState(state => ({
      props: registry[this.props.query].props
    }));
  }

  update(newProps) {
    this.setState(state => ({
      props: newProps
    }));
  };

  formatProps(props) {
    const formattedProps = {};

    Object.keys(props).map(key => {
      formattedProps[props[key].name] = props[key].value;
    });

    return formattedProps;
  };

  render() {
    const {
      className,
      query,
      ...rest
    } = this.props;

    const entry = registry[query] || undefined;
    const defaultProps = entry.defaultProps;

    const mergeProps = (props, defaultProps) => {
      const mergedProps = props;

      Object.keys(defaultProps).map(key => {
        if (defaultProps[key]) {
          mergedProps[key].value = defaultProps[key];
        }
      });

      return mergedProps;
    };

    mergeProps(entry.props, defaultProps);

    const stack = utilities.createClassStack([
      'Specimen',
      className
    ]);

    const propState = {};

    return (
      entry ?
      <div className={stack} {...rest}>
        <Rhythm>
          <Wrapper>
            <Heading level='h4'>{query} <Badge >{entry.category}</Badge></Heading>
          </Wrapper>
          <Resizer>
            <Frame componentName={query} componentProps={this.formatProps(this.state.props)} />
          </Resizer>
          <Wrapper size="small" className="Specimen__table-wrapper">
            <PropsTable componentProps={this.state.props} query={query} sendProps={this.update} />
          </Wrapper>
        </Rhythm>
      </div> : <p>Sorry, this component does not exist</p>
    )
  }
}

Specimen.propTypes = {
  query: PropTypes.string.isRequired
};

export default Specimen;
