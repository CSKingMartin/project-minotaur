import TableBody from './Body';
import TableColumn from './Column'
import TableData from './Data';
import TableHead from './Head';
import TableHeader from './Header';
import TableFoot from './Foot';
import TableRow from './Row';

export const Table = (props) => {
  const {
    children
  } = props;

  console.log(props.children);

  return (
    <div>{children}</div>
  );
};

Table.propTypes = {
  children: PropTypes.node
};

Table.Body = TableBody;
Table.Column = TableColumn;
Table.Data = TableData;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Foot = TableFoot;
Table.Row = TableRow;

export default Table;
