import Badge from '@atoms/Badge';
import Button from '@atoms/Button';
import Heading from '@atoms/Heading';
import registry from '@catalog/registry.json'

import Frame from './Frame'; // local Frame partial
import Resizer from './Resizer'; // local Resizer partial
import PropsTable from './PropsTable'; // local PropsTable partial

// const SpecimenContext = React.createContext({
//   query: '',
//   onChange: () => {},
//   newProps: {},
//   setProps: () => {}
// });

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

  // const [propState, setPropState] = useState(null);
  const entry = registry[query];

  return (
 
      <div className={stack} {...rest}>
        <React.Fragment>
          <Heading level='h3'>{query}:<Badge variant="inline">{entry.category}</Badge></Heading>        
          <PropsTable query={query}/>
        </React.Fragment>
      </div>
  );
};

Specimen.propTypes = {
  query: PropTypes.string.isRequired
};

export default Specimen;
