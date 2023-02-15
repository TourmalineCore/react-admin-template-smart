import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import customErrorBoundary from '../../../../common/error-handling/errorBoundary';
import NameStateContext from './NameStateContext';

import { useNameLoader } from './useNameLoader';

function Name() {
  useNameLoader();

  const nameState = useContext(NameStateContext);

  return (
    <div className="section name">
      {nameState.name}
      {' '}
      {nameState.isLoading && (<Skeleton />)}
    </div>

  );
}

export default customErrorBoundary(observer(Name));
