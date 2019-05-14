import Heading from '@atoms/Heading';
import HorizontalRule from '@atoms/HorizontalRule';
import Link from 'next/link';

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
          <Link key={key} href={pair.url}><a>{pair.label}</a></Link>
        ))}
      </div>
      <Heading level="h3">{children}</Heading>
      <HorizontalRule />
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
