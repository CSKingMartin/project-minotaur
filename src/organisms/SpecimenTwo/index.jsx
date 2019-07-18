import Frame from './Frame';

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
        query: query
      }}
    >
      <div className={stack} {...rest}>
        <SpecimenContext.Consumer>
          {(value) => (
            <Frame component={value.query} />
          )}
        </SpecimenContext.Consumer>
      </div>
    </SpecimenContext.Provider>
  );
};

Specimen.propTypes = {
  query: PropTypes.string.isRequired
};

export default Specimen;
