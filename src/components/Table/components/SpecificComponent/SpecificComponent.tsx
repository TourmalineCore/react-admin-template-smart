import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { Service } from '../../../../common/utils/Services';

function SpecificComponent({
  index,
}: {
  index: number;
}) {
  const { isLoading, data: response, error } = useQuery({
    queryKey: ['specific component'],
    queryFn: () => Service.getSpecificData(),
  });

  useErrorHandler(error);

  return (
    <span>
      {isLoading && <Skeleton />}

      {response?.data[index].phone}
    </span>
  );
}

export default SpecificComponent;
