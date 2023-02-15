import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { Service } from '../../../../common/utils/Services';

function Aggregation() {
  const [params] = useSearchParams();
  const id = params.get('id');

  const { isLoading, data: response, error } = useQuery({
    queryKey: ['aggregated data'],
    queryFn: () => Service.getAggregatedData(id),
  });

  useErrorHandler(error);

  return (
    <div className="aggregation">
      <h2 className="title">Aggregation</h2>
      {isLoading ? <Skeleton height={40} width="100%" count={5} />
        : (
          <ul className="list">
            {response?.data.map((aggregation) => (
              <li className="item" key={aggregation.name}>
                {aggregation.body}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default Aggregation;
