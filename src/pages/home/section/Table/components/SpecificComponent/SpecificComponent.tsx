import Skeleton from 'react-loading-skeleton';
import errorBoundaryObserver from '../../../../../../common/hoc/errorBoundaryObserver';

import { useGet } from '../../../../../../common/hooks/useGet';

function SpecificComponent({
  index,
}: {
  index: number;
}) {
  const {
    isLoading,
    response,
  } = useGet<TableType[]>({
    queryKey: [`specific-component`],
    url: `/users`,
  });

  return (
    <span>
      {isLoading && <Skeleton />}
      {response?.length && (
        <span>{response![index].phone}</span>
      )}
    </span>
  );
}

export default errorBoundaryObserver(SpecificComponent);
