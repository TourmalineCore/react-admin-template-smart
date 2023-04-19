import SpecificComponent from './components/SpecificComponent/SpecificComponent';
import SkeletonTableRow from './components/SkeletonTableRow/SkeletonTableRow';
import { useGet } from '../../../../common/hooks/useGet';
import errorBoundaryObserver from '../../../../common/hoc/errorBoundaryObserver';

function Table() {
  const {
    isLoading,
    response,
  } = useGet<TableType[]>({
    queryKey: [`specific-component`],
    url: `/users`,
  });

  return (
    <>
      <h2>Table</h2>
      <table className="section table">
        <thead>
          <tr className="head">
            <th className="column2">Position</th>
            <th className="column3">Start date</th>
            <th className="column4">Last Activity</th>
            <th className="column5">Contacts</th>
          </tr>
        </thead>

        <tbody>
          {isLoading && (
            <>
              <SkeletonTableRow />
              <SkeletonTableRow />
              <SkeletonTableRow />
              <SkeletonTableRow />
              <SkeletonTableRow />
              <SkeletonTableRow />
            </>
          )}
          {response?.map((item, index) => (
            <tr
              className="table-row"
              key={item.id}
            >
              <td data-cy="table-name-cell">{item.name}</td>
              <td>
                <SpecificComponent index={index} />
              </td>
              <td className="column4">{item.email}</td>
              <td className="column5">{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default errorBoundaryObserver(Table);
