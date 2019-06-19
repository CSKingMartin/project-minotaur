/* eslint-disable */
{ /*
  TODO:

  Regroup around types of 'Wrapper'
  This doesn't have to represent a standard going forward.

  What has been popular with Design / UX has been:
  ['inner', 'outer', 'max-width' 'page-width']
*/ }
/* eslint-enable */


export const Wrapper = (props) => {
  const {
    size,
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Wrapper',
    `Wrapper--${size}`,
    className
  ]);

  return (
    <div className={stack}>
      {children}
    </div>
  );
};

Wrapper.defaultProps = {
  size: 'default'
};

Wrapper.propTypes = {
  size: PropTypes.oneOf(['default', 'content', 'wide', 'body']),
  className: PropTypes.string,
  children: PropTypes.node
};

export default Wrapper;
