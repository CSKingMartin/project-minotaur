import NavigationLink from '@atoms/NavigationLink'
import NavSearchbar from '@atoms/NavSearchbar';

export const Navigation = (props) => {
  const {
    href,
    children,
    ...rest
  } = props;

  /* Goals: Iterate through DropDownObjects, create a Navigation Link for Category and
    pass in the items for drop down menu lists.
  */

  return (
    <div>
    <br />
      <div className="Navigation">
        <div className="Left-Side">
          <div className="Equal-Space-Nav">
            <NavigationLink></NavigationLink>
          </div>
        </div>
        <div className="Right-Side">
          <NavSearchbar placeholder="search..."></NavSearchbar>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
