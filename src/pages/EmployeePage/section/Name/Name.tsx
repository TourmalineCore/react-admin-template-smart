import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
// import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import customErrorBoundary from '../../../../common/error-handling/errorBoundary';
import NameStateContext from './NameStateContext';
// import NameStateContext from './NameStateContext';

import { useNameLoader } from './useNameLoader';

function Name() {
  console.log('render name');

  useNameLoader();

  const nameState = useContext(NameStateContext);

  console.log('render useGet ');

  return (
    <div className="section name">
      {nameState.name as string}
      {' '}
      {nameState.isLoading && (<Skeleton />)}
    </div>
  );
}

export default customErrorBoundary(observer(Name));
