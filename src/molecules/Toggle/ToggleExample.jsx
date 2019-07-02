
const ToggleExample = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  return(
    <div>
      {props.toggle ? 
        <p className="Toggle__on">Toggle switch "ON"</p> :
        <p className="Toggle__off">Toggle switch "OFF"</p>
      }     
      </div>
  )
  
}

export default ToggleExample;