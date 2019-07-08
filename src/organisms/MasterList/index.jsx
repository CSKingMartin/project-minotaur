import Badge from '@atoms/Badge';
import Card from '@atoms/Card';
import Heading from '@atoms/Heading';
import PageLink from '@atoms/PageLink';
import Rhythm from '@atoms/Rhythm';

export const MasterList = (props) => {
  const {
    className,
    registry
  } = props;

  const stack = utilities.createClassStack([
    'MasterList',
    className
  ]);

  return (
    <Rhythm>
      {Object.keys(utilities.alphabetizeObject(registry)).map((key) => {
        const entry = registry[key];

        let color = '';

        switch (entry.category) {
          case 'atom':
            color = 'blue';
            break;
          case 'molecule':
            color = 'green';
            break;
          case 'organism':
            color = 'red';
            break;
          case 'template':
            color = 'orange';
            break;
          default:
            color = 'yellow';
            break;
        }

        return (
          <Card>
            <Heading level="h5">{entry.name}</Heading>
            <Badge
              color={color}
              >
                {entry.category}
            </Badge>
            <Heading level="h6">Inherits:</Heading>
            <Rhythm>
              {entry.inherits.map((key, index) => {
                console.log(registry[key]);
                if (registry[key].path) {
                  return (
                    <p><PageLink key={index} label={key} href={registry[key].path} /></p>
                  )
                }

                return (
                  <div key={index}>{key}</div>
                )
              })}
            </Rhythm>
          </Card>
        );
      })}
    </Rhythm>
  );
};

MasterList.propTypes = {
  className: PropTypes.string,
  registry: PropTypes.object
};

export default MasterList;
