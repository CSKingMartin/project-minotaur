export const NavigationLink = (props) => {
  const {
    className,
    href,
    link,
    ...rest
  } = props;

  let DropDownObjects = [
    {
      category: 'Computer',
      items: ['Graphics Cards', 'RAM']
    },
    {
      category: 'Audio',
      items: ['Headphones', 'Microphones']
    },
    {
      category: 'Video',
      items: ['Mirror', 'DSLR']
    }
  ];

  const stack = utilities.createClassStack([
    'NavigationLink',
    className
  ]);

  const navCategory = DropDownObjects.map((objects) => (
      <div>
        <ul>
          <li>
            <a key={objects.category} className={stack} href="/">{objects.category}</a>
            <ul className="Dropdown_Item_List">
            {
              objects.items.map((itemlist) =>
                <li key={itemlist}>
                  <div className="Dropdown_Item">
                    <a href={"/" + itemlist}>{itemlist}</a>
                  </div>
                </li>
              )
            }
            </ul>
          </li>
        </ul>
      </div>
    )
  );

  return (
    <React.Fragment>
      {navCategory}
    </React.Fragment>
  );
};

// NavigationLink.propTypes = {
//   href: PropTypes.string.isRequired
// };

export default NavigationLink;
