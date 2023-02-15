import { useSearchParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import customErrorBoundary from '../../../../common/error-handling/errorBoundary';

import { useGet } from '../../../../common/hooks/useGet';

function Name() {
  const [params] = useSearchParams();
  const id = params.get('id');

  const { isLoading, data } = useGet({
    url: `users/${id}`,
    errorMessage: 'Error get name',
  });

  return (
    <div className="section name">
      {data?.name}
      {' '}
      {isLoading && (<Skeleton />)}
    </div>

  );
}

export default customErrorBoundary(Name);
