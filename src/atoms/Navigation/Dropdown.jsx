import DropdownItem from './DropdownItem';

const dropdownLists = [{
  title: 'Atoms',
    list: ['Button', 'Card', 'Heading', 'Image', 'Link']
  },
  {
    title: 'Molecules',
    list: ['Brand', 'Editor', 'Expandable', 'Input', 'Media']
  },
  {
    title: 'Organisms',
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