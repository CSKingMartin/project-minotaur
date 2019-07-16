// const Cell = (children) => (
//   <div>{children}</div>
// );

export const Cells = (props) => {
  const {
    className,
    headings,
    activeIndex,
    updater,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__cells',
    className
  ]);

  return (
    <div className={stack}>
      {
        headings.map((heading, index) => {
          return (
            <div onClick={() => updater(index)} className={index === activeIndex ? "Tabs__cells-cell is-active" : "Tabs__cells-cell"} key={index}>{heading}</div>
          )
        })
      }
    </div>
  );
};

export default Cells;
