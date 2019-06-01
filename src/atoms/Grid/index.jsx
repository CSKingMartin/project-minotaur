export const Grid = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Grid',
    className
  ]);

  return (
    <div className={stack} {...rest}>
      {children}
    </div>
  );
};

export default Grid;

/*
  Note to self:

  I'm not sure if I want to make an over-arching Grid component at this time.

  I don't know if we have enough use cases to quantify making it now.

  It's gonna take a long time to make, and you don't want to do a shit job.
*/
