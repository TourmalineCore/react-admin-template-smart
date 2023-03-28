import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import withErrorBoundary from '../../../../../../common/HOC/withErrorBoundary';
import { Service } from '../../../../../../common/utils/Services';

function Metrics() {
  const [params] = useSearchParams();
  const id = params.get(`id`);

  const { isLoading, data: response, error } = useQuery({
    queryKey: [`projects`],
    queryFn: () => Service.getProjectsAsync(id),
  });

  useErrorHandler(error);

  return (
    <div className="metrics">
      <h2 className="title">Metrics</h2>
      {isLoading ? (
        <Skeleton
          height={40}
          width="100%"
          count={5}
        />
      )
        : (
          <ul className="list">
            {response?.data.map((project) => (
              <li
                className="item"
                key={project.id}
              >
                {project.email}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default withErrorBoundary(Metrics, { hasRetry: true });
