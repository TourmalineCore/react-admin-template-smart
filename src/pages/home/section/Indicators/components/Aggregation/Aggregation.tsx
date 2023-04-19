import Skeleton from 'react-loading-skeleton';
import errorBoundaryObserver from '../../../../../../common/hoc/errorBoundaryObserver';
import { useGet } from '../../../../../../common/hooks/useGet';
import useId from '../../../../../../common/hooks/useId';

function Aggregation() {
  const { id } = useId();

  const {
    isLoading,
    response,
  } = useGet<AggregatedDataTypes[]>({
    queryKey: [`aggregations`],
    url: `/comments?postId=${id}`,
  });

  return (
    <div className="aggregation">
      <h2 className="title">Aggregation</h2>
      {isLoading ? (
        <Skeleton
          height={40}
          width="100%"
          count={5}
        />
      )
        : (
          <ul className="list">
            {response!.map((aggregation) => (
              <li
                className="item"
                key={aggregation.name}
              >
                {aggregation.body}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default errorBoundaryObserver(Aggregation, { canRetry: true });
