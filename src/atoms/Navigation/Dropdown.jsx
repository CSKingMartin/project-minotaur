import DropdownItem from './DropdownItem';

const dropdownLists = [
  {
    title: 'Atoms',
    path: 'atoms',
    list: ['Button', 'Card', 'Heading', 'Image', 'Link']
  },
  {
    title: 'Molecules',
    path: 'molecules',
    list: ['Brand', 'Editor', 'Expandable', 'Input', 'Media']
  },
  {
    title: 'Organisms',
    path: 'organisms',
    list: ['Full Example', 'Specimen']
  },
]

export const NavDropdown =(props) => {
  return (
    <React.Fragment>
      { dropdownLists.map((item,index) => 
        <DropdownItem 
          key={index}
          title={item.title} 
          list={item.list}
          path={item.path}
        />
      )}
    </React.Fragment>
  );
};

NavDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default NavDropdown;