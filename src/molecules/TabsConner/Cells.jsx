export const Cells = (props) => {
  const {
    className,
    headings,
    activeIndex,
    focusedIndex,
    updater,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'TabsConner__cells',
    className
  ]);

  return (
    <div className={stack} {...rest}>
      {
        headings.map((heading, index) => {
          const cellStack = utilities.createClassStack([
            'TabsConner__cells-cell',
            index === activeIndex && 'is-active',
            index === focusedIndex && 'is-focused',
          ]);

          return (
            <div onClick={() => updater(index)} className={cellStack} key={index}>{heading}</div>
          )
        })
      }
    </div>
  );
};

export default Cells;
