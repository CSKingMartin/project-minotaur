import registry from '@catalog/registry.json';

export const PropsTable = (props) => {
  const {
    className,
    children,
    query,
    ...rest
  } = props;

  const propsList = registry[query].props
  const propItem = registry[query].props.children

  const getProps = (props) => {

  }

  // console.log("propList",propsList);
  // console.log("getProps", getProps)

  return (
    <div className={className} {...rest}>
      {query}
      {children}

      {/* { Object.entries(propsList).map((item, index) => 
      <div key={index}>
        <p>name: {propsList[item].name}</p>
     
       
      </div>
      ) } */}
    
    </div>
  );
};

export default PropsTable;
