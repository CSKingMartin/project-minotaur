import NavDropdown from './Dropdown';
import SearchInput from './SearchInput';

export const Navigation = (props) => {
    const {
        href,
        className,
        children,
        ...rest
    } = props;

    const stack = utilities.createClassStack([
        'Navigation',
        className
    ]);

    return ( 
      <div className={stack} {...rest}>{children}
      <NavDropdown />
      <SearchInput />
      </div>
    );
};


Navigation.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

Navigation.Dropdown = NavDropdown;
Navigation.Search = SearchInput;

export default Navigation;