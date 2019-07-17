import registry from '@catalog/registry.json';

export const PropsTable = (props) => {
  const {
    className,
    children,
    query,
    ...rest
  } = props;

  console.log(registry[query].props);

  return (
    <div className={className} {...rest}>
      {query}
      {children}
    </div>
  );
};

export default PropsTable;
