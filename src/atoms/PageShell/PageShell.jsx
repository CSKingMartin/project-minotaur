export const PageShell = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <div className="PageShell">{children}</div>
  );
};

PageShell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default PageShell;
