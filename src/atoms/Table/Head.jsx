import ReactDOM from 'react-dom';
import TableContext from './TableContext';

export const TableHead = (props) => {
  const {
    className,
    children,
  } = props;

  const stack = utilities.createClassStack([
    'Table__head',
    className
  ]);


  return (
    // <TableContext.Consumer>
    //   {(context)=>
    //     <thead onClick={() => context.toggleVisibility(!context.visibility)} className={stack}>{children}</thead>
    //   }
    // </TableContext.Consumer>
    <thead className={stack}>{children}</thead>
  );
};

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TableHead;
