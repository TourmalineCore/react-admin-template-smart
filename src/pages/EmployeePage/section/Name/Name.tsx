import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import customErrorBoundary from '../../../../common/error-handling/errorBoundary';
// import errorBoundary from '../../../../common/error-handling/errorBoundary';
import { Service } from '../../../../common/utils/Services';
// import ErrorComponent from '../../../../components/ErrorComponent/ErrorComponent';

function Name() {
  const [params] = useSearchParams();

  const id = params.get('id');

  const { isLoading, data, error } = useQuery({
    queryKey: ['name'],
    queryFn: () => Service.getName(id),

  });

  useErrorHandler(error);

  return (
    <div className="section name">
      {data}
      {' '}
      {isLoading && (<Skeleton />)}
    </div>

  );
}

export default customErrorBoundary(Name);
