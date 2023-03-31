import Skeleton from 'react-loading-skeleton';
import errorBoundaryObserver from '../../../../common/hoc/errorBoundaryObserver';
import { useGet } from '../../../../common/hooks/useGet';
import useId from '../../../../common/hooks/useId';

function Name() {
  const { id } = useId();

  const {
    isLoading,
    response,
  } = useGet<NameTypes>({
    queryKey: [`name`],
    url: `users/${id}`,
  });

  return (
    <div
      className="section name"
      data-cy="name-section"
    >
      {response?.name}
      {isLoading && (<Skeleton />)}
    </div>
  );
}

export default errorBoundaryObserver(Name, {
  customError: `Name component have error`,
  canRetry: true,
});
