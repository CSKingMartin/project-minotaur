import Badge from '@atoms/Badge';
import Heading from '@atoms/Heading';
import registry from '@catalog/registry.json'
import PropsTable from './PropsTable'; // local PropsTable partial

const Specimen = (props) => {
  const {
    className,
    query,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Specimen',
    className
  ]);

  const [propState, setPropState] = useState();
  const entry = registry[query];

  return (
    entry ?
    <div className={stack} {...rest}>
      <React.Fragment>
        <Heading level='h4'>{query} <Badge variant="default">{entry.category}</Badge></Heading>
        <PropsTable query={query} propState={propState} setPropState={setPropState}/>
      </React.Fragment>
    </div> : <p>Sorry, this component does not exist</p>
  );
};

Specimen.propTypes = {
  query: PropTypes.string.isRequired
};

export default Specimen;
