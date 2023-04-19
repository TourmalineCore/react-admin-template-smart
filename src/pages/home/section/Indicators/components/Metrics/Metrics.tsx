import Skeleton from 'react-loading-skeleton';
import errorBoundaryObserver from '../../../../../../common/hoc/errorBoundaryObserver';
import useId from '../../../../../../common/hooks/useId';
import { useGet } from '../../../../../../common/hooks/useGet';

function Metrics() {
  const { id } = useId();

  const {
    isLoading,
    response,
  } = useGet<ProjectTypes[]>({
    queryKey: [`metrics`],
    url: `/comments?postId=${id}`,
  });

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
            {response!.map((project) => (
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

export default errorBoundaryObserver(Metrics, { canRetry: true });
