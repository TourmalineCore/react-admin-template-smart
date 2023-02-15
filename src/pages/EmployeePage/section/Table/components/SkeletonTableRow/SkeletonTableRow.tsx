import Skeleton from 'react-loading-skeleton';

function SkeletonTableRow() {
  return (
    <tr className="row100 body">
      <td className="cell100 column2">
        <Skeleton />
      </td>
      <td className="cell100 column3">
        <Skeleton />
      </td>
      <td className="cell100 column4">
        <Skeleton />
      </td>
      <td className="cell100 column5">
        <Skeleton />
      </td>
    </tr>
  );
}

export default SkeletonTableRow;
