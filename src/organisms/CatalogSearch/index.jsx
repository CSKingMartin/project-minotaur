import Button from '@atoms/Button';
import Icon from '@atoms/Icon';
import Input from '@molecules/Input';
import Media from '@molecules/Media';

import Results from './Results.jsx';

/*
  https://reactjs.org/docs/context.html#reactcreatecontext

  Context here provides two separate pieces of info to two different
  sub components

  the Results (imported above) takes a query string to compare to the
  Catalog context data

  the Input takes a function which updates the master state
  in the root element (this file, CatalogSearch)
*/

export const QueryContext = React.createContext({
  query: '',
  update: () => {},
  onMouseDown: () => {},
  onFocus: () => {}
});

const CatalogSearch__ui = () => (
  <QueryContext.Consumer>
    {(value) => (
      <Media className="CatalogSearch__ui">
        <Media.Body className="CatalogSearch__input-wrapper">
          <Input
            placeholder="What are you looking for?"
            className="CatalogSearch__input"
            additionalChange={value.update}
            onFocus={value.onFocus}
          />
        </Media.Body>
        <Media.Figure>
          <Button className="CatalogSearch__submit">
            <Icon name="search" />
          </Button>
        </Media.Figure>
      </Media>
    )}
  </QueryContext.Consumer>
);

export class CatalogSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      isActive: false
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onUpdate(e) {
    const { value } = e.target;
    if (value !== this.state.query) {
      /* do stateful things */
      this.setState(() => ({
        query: value
      }));
    }
  }

  onFocus() {
    this.setState(() => ({
      isActive: true
    }));
  }

  onMouseDown(e) {
    console.log(e.target.parentNode);
    if(!e.target.parentNode.classList.contains('inside-catalog-search')){
      this.setState(() => ({
        isActive: false
      }));
    }
  }

  render() {
    const {
      className,
      children,
      ...rest
    } = this.props;

    const stack = utilities.createClassStack([
      'CatalogSearch',
      className
    ]);

    return (
      <QueryContext.Provider
        value={{
          query: this.state.query, // => this is going to be our dynamic query
          update: this.onUpdate, // a function to update state
          onMouseDown: this.onMouseDown, // a function to close the dropdown on blur
          onFocus: this.onFocus
        }}
      >
        <QueryContext.Consumer>
          {(value) => (
            <div className={stack} onMouseDown={value.onMouseDown} {...rest}>
              <CatalogSearch__ui />
              <QueryContext.Consumer>
                {(value) => (
                  <Results query={value.query} expand={this.state.isActive} />
                )}
              </QueryContext.Consumer>
            </div>
          )}
        </QueryContext.Consumer>
      </QueryContext.Provider>
    );
  }
}

CatalogSearch.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default CatalogSearch;
