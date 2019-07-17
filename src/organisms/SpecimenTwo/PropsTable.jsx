import registry from '@catalog/registry.json';

export const PropsTable = (props) => {
  const {
    className,
    children,
    query,
    ...rest
  } = props;

  const propsObject = registry[query].props
  const propItem = registry[query].props.children
  
 const propsItems = () => {
   console.log(Object.entries(propsItem))
    }

    console.log(Object.entries(propsObject))
  return (
    <div className={className} {...rest}>
      {query}
      {children}   
      {/* {
        Object.entries((propsObject).forEach => 
          propsObject[inex]
        )
      } */}
   
    </div>
  );
};

export default PropsTable;
