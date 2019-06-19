export const NavSearchbar = (props) => {
  const {
    className,
    name,
    placeholder,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'NavSearchbar',
    className
  ]);

  return (
    <div>
      <input
        className={stack}
        name={name}
        placeholder={placeholder}
        >
      </input>
    </div>
  );
};

NavSearchbar.propTypes = {
  placeholder: PropTypes.string,
}

export default NavSearchbar;
