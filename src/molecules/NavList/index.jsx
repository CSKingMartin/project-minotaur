import Heading from '@atoms/Heading';
import Rhythm from '@atoms/Rhythm';
import PageLink from '@atoms/PageLink';
import registry from '@catalog/registry.json';

const atomsIndexData = Object.keys(registry).filter((key) => registry[key].category === 'atom' && registry[key].path);
const moleculesIndexData = Object.keys(registry).filter((key) => registry[key].category === 'molecule' && registry[key].path);
const organismsIndexData = Object.keys(registry).filter((key) => registry[key].category === 'organism' && registry[key].path);

const NavList = (props) => {
  const {
    label
  } = props;

  let target; // empty let

  switch (label) {
    case 'atoms':
      target = atomsIndexData;
      break;
    case 'molecules':
      target = moleculesIndexData;
      break;
    case 'organisms':
      target = organismsIndexData;
      break;
    default:
      break;
  }

  return (
    <Rhythm className="NavList">
      <Heading className="NavList__heading" level="h6">{`${label.charAt(0).toUpperCase()}${label.substr(1, label.length - 1)}`}</Heading>
      {target.map((key, index) => (
        <PageLink key={index} label={key} href={registry[key].path} />
      ))}
    </Rhythm>
  );
};

NavList.propTypes = {
  label: PropTypes.string
};

export default NavList;
