export const Image = (props) => {
  const {
    src,
    alt,
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Image',
    className
  ]);

  return (
    <img className={stack} src={src} alt={alt} {...rest} />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Image;
