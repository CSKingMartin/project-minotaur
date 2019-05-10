import Heading from '@atoms/Heading';
import Link from '@atoms/Link';

export const ExampleHeading = (props) => {
  const {
    className,
    variant,
    links,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'ExampleHeading',
    `ExampleHeading--${variant}`,
    className
  ]);

  return (
    <div className={stack} {...rest}>
      <div className="ExampleHeading__breadcrumb">
        {links.map((pair, key) => (
          <Link key={key} className="ExampleHeading__link" href={pair.url}>{pair.label}</Link>
        ))}
      </div>
      <Heading level="h3">{children}</Heading>
    </div>
  );
};

ExampleHeading.propTypes = {
  links: PropTypes.array,
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ExampleHeading;
