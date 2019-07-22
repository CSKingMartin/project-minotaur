import Badge from '@atoms/Badge';
import Heading from '@atoms/Heading';
import registry from '@catalog/registry.json'

import Frame from './Frame'; // local Frame partial
import Resizer from './Resizer'; // local Resizer partial
import PropsTable from './PropsTable'; // local PropsTable partial

const SpecimenContext = React.createContext({
  query: '',
  onChange: () => {}
});

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

  return (
    <SpecimenContext.Provider
      value={{
        query: query,
        // props: => needs to be defaultProps, then new data when PropsTable is updated
      }}
    >
      <div className={stack} {...rest}>
        <SpecimenContext.Consumer>
          {(value) => {
            const entry = registry[value.query];

            if (entry) {
              return (
                <React.Fragment>
                  <Heading level='h3'>{value.query}:<Badge variant="inline">{entry.category}</Badge></Heading>
                  <Resizer>
                    <Frame component={value.query} />
                    {/* <Frame component={value.query} props={value.props} /> */}
                  </Resizer>
                  <PropsTable query={value.query} />
                  {/* <PropsTable query={value.query} defaultProps={entry.defaultProps} /> */}
                </React.Fragment>
              );
            } else {
              return <p>I'm sorry we errored :(</p>
            }
          }}
        </SpecimenContext.Consumer>
      </div>
    </SpecimenContext.Provider>
  );
};

Specimen.propTypes = {
  query: PropTypes.string.isRequired
};

export default Specimen;
