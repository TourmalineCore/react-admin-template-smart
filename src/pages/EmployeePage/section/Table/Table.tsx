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
    queryKey: ['table'],
    queryFn: () => Service.getTableData(),
    onSuccess: ({ data }) => {
      setDataTable(data);
    },
  });

  useErrorHandler(error);

  return (
    <table className="section">
      <thead>
        <tr className="row100 head">
          <th className="cell100 column2">Position</th>
          <th className="cell100 column3">Start date</th>
          <th className="cell100 column4">Last Activity</th>
          <th className="cell100 column5">Contacts</th>
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
          <tr className="row100 body" key={item.id}>
            <td className="cell100 column2">{item.name}</td>
            <td className="cell100 column3">

              <ErrorBoundary FallbackComponent={ErrorComponent}>
                <SpecificComponent index={index} />
              </ErrorBoundary>

            </td>
            <td className="cell100 column4">{item.email}</td>
            <td className="cell100 column5">{item.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
