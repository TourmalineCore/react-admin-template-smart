import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { Service } from '../../common/utils/Services';

function Indicators() {
  const [params] = useSearchParams();
  const id = params.get('id');

  const { isLoading, data: response, error } = useQuery({
    queryKey: ['projects', 'aggregated data'],
    queryFn: () => Service.getProjects(id),
  });

  const { isLoading: isAggregatedDataLoading, data: aggregatedDataResponse, error: aggregatedDataError } = useQuery({
    queryKey: ['projects', 'aggregated data'],
    queryFn: () => Service.getProjects(id),
  });

  if (error) {
    useErrorHandler(error);
  }
  if (aggregatedDataError) {
    useErrorHandler(aggregatedDataError);
  }

  return (
    <div>
      {isLoading ? <Skeleton height={40} count={5} />
        : (response?.data.map((project) => (
          <div key={project.id}>
            {project.email}
          </div>
        )))}
      {isAggregatedDataLoading ? <Skeleton height={40} baseColor="#FF0000" count={2} />
        : (aggregatedDataResponse?.data.map((project) => (
          <div key={project.name}>
            {project.body}
          </div>
        )))}
    </div>
  );
}

export default Indicators;
