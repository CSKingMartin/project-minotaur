import TableContext from './TableContext';
import { useContext } from 'react';

export const TableBody = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Table__body',
    className
  ]);

  // const toggle = useContext(TableContext);
  // console.log("toggle.visibility: ", toggle.visibility)

  // <TableContext.Consumer>
  //   {(context) => (
  //     toggle.visibility ?
  //     <tbody className='Table__body__showing'>{children}</tbody>
  //     : <tbody className='Table__body'>{children}</tbody>
  //     )
  //   }
  // </TableContext.Consumer>

  return (
    <tbody className='Table__body'>{children}</tbody>
  );
};

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TableBody;
