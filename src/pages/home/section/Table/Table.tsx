import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import { Service } from '../../../../common/utils/Services';
import ErrorComponent from '../../../../components/ErrorComponent/ErrorComponent';
import SkeletonTableRow from './components/SkeletonTableRow/SkeletonTableRow';
import SpecificComponent from './components/SpecificComponent/SpecificComponent';
import { ITable } from './types';

function Table() {
  const [dataTable, setDataTable] = useState<ITable[]>([]);

  const { isLoading, error } = useQuery({
    queryKey: [`table`],
    queryFn: () => Service.getTableData(),
    onSuccess: ({ data }) => {
      setDataTable(data);
    },
  });

  useErrorHandler(error);

  return (
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
        {dataTable.map((item, index) => (
          <tr
            className="table-row"
            key={item.id}
          >
            <td className="column2">{item.name}</td>
            <td className="column3">

              <ErrorBoundary FallbackComponent={ErrorComponent}>
                <SpecificComponent index={index} />
              </ErrorBoundary>

            </td>
            <td className="column4">{item.email}</td>
            <td className="column5">{item.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
