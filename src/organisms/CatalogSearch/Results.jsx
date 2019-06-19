import {
  catalogContext
} from '@lib/get-context.js';
import Badge from '@atoms/Badge';
import Expandable from '@molecules/Expandable';
import Media from '@molecules/Media';

const CatalogResult = (props) => {
  const {
    name,
    category,
    ...rest
  } = props;

  const [isActive, highlight] = useState(false);

  const stack = utilities.createClassStack([
    'CatalogSearch__result',
    isActive && 'is-abyss'
  ]);

  const defineColor = (label) => {
    switch (label) {
      case 'atom': return 'blue';
      case 'molecule': return 'green';
      case 'organism': return 'red';
      default: return '';
    }
  };

  return (
    <Media
      className={stack}
      variant="full"
      onMouseEnter={() => highlight(true)}
      onMouseLeave={() => highlight(false)}
      {...rest}
    >
      <Media.Body>
        <p>{name}</p>
      </Media.Body>
      <Media.Figure>
        <Badge color={defineColor(category)} className="CatalogSearch__result-badge">{category}</Badge>
      </Media.Figure>
    </Media>
  );
};

export const Results = (props) => {
  const {
    className,
    query,
    expand,
    children,
    ...rest
  } = props;

  /*
    parse:
    takes catalogContext, and converts it to an Array of Objects
  */
  const parse = (obj) => {
    const returnObject = (obj).map((string) => ({
      name: string.substring(string.indexOf('/', string.indexOf('/') + 1) + 1, string.indexOf('/index.jsx')),
      category: string.substring(string.indexOf('/') + 1, string.indexOf('/', string.indexOf('/') + 1) - 1)
    }));

    return returnObject;
  };

  const catalogObject = parse(catalogContext.keys());

  /* takes catalogObject and returns index order for an alphabetized sort */
  const sortedObject = Object.keys(catalogObject).sort((first, second) => {
    if (catalogObject[first].name.toUpperCase() < catalogObject[second].name.toUpperCase()) {
      return -1;
    }
    if (catalogObject[first].name.toUpperCase() > catalogObject[second].name.toUpperCase()) {
      return 1;
    }
    return 0;
  });

  const searchedObject = sortedObject.filter((item) => {
    if (query) {
      const name = catalogObject[item].name.toUpperCase();
      const uppercaseQuery = query.toUpperCase();

      return name.indexOf(uppercaseQuery) === 0;
    }

    return null;
  });

  const stack = utilities.createClassStack([
    'CatalogSearch__drawer',
    (searchedObject.length > 0 && expand) && 'is-active',
    className
  ]);

  return (
    <Expandable className={stack} forceExpand={expand} closeHeight="0" {...rest}>
      {
        searchedObject.map((index) => {
          const item = catalogObject[index];

          return (
            <CatalogResult
              key={index}
              name={item.name}
              category={item.category}
            />
          );
        })
      }
    </Expandable>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  query: PropTypes.string,
  expand: PropTypes.bool,
  children: PropTypes.node
};

CatalogResult.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  children: PropTypes.node
};

export default Results;
