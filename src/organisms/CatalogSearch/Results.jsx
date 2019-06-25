import {
  data
} from '@lib/registry.js';
import Badge from '@atoms/Badge';
import Expandable from '@molecules/Expandable';
import Media from '@molecules/Media';
import PageLink from '@atoms/PageLink';


const CatalogResult = (props) => {
  const {
    name,
    category,
    example,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'CatalogSearch__result'
  ]);

  const defineColor = (label) => {
    switch (label) {
      case 'atoms': return 'blue';
      case 'molecules': return 'green';
      case 'organisms': return 'red';
      default: return '';
    }
  };

  return (
    <Media
      className={stack}
      variant="full"
      {...rest}
    >
      <Media.Body className="inside-catalog-search">
        <div className="CatalogSearch__result-inner">
          <p>{name}</p>
          <p>
            {example && <span className="CatalogSearch__result-link"><PageLink className="inside-catalog-search" label="Docs" href={`/catalog/${category}/${name}`}/></span>}
          </p>
        </div>
      </Media.Body>
      <Media.Figure className="inside-catalog-search">
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

  const response = data.filter((item) => {
    if (query) {
      const name = item.name.toUpperCase();
      const uppercaseQuery = query.toUpperCase();

      return name.indexOf(uppercaseQuery) === 0;
    }

    return null;
  });

  const stack = utilities.createClassStack([
    'CatalogSearch__drawer',
    (response.length > 0 && expand) && 'is-active',
    className
  ]);

  return (
    <Expandable className={stack} forceExpand={expand} closeHeight="0" {...rest}>
      {
        response.map((item, i) => {
          return (
            <CatalogResult
              key={i}
              name={item.name}
              category={item.category}
              example={item.example}

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
  example: PropTypes.bool,
  children: PropTypes.node
};

export default Results;
