import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import withErrorBoundary from '../../../../common/HOC/withErrorBoundary';
import NameStateContext from './NameStateContext';
import { useNameLoader } from './useNameLoader';

function Name() {
  useNameLoader();

  const nameState = useContext(NameStateContext);

  return (
    <div className="section name">
      {nameState.name as string}
      {nameState.isLoading && (<Skeleton />)}
    </div>
  );
}

export default withErrorBoundary(observer(Name));
