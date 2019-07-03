export const Heading = (props) => {
  const {
    tagName,
    level,
    weight,
    className,
    children,
    ...rest
  } = props;

  const Tag = tagName || level || 'h1';

  const stack = utilities.createClassStack([
    'Heading',
    `Heading--${level}`,
    `Heading--${weight}`,
    className
  ]);

  return (
    <Tag className={stack} {...rest}>{children}</Tag>
  );
};

Heading.defaultProps = {
  level: 'h1',
  weight: 'default'
};

Heading.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  weight: PropTypes.oneOf(['default', 'bold', 'light']),
  className: PropTypes.string,
  children: PropTypes.node
};

export default Heading;
