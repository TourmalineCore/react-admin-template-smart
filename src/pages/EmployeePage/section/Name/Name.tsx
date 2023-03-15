import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
// import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import customErrorBoundary from '../../../../common/error-handling/errorBoundary';
import NameStateContext from './NameStateContext';
// import NameStateContext from './NameStateContext';

// import { useNameLoader } from './useNameLoader';

function Name() {
  const [params] = useSearchParams();
  const id = params.get('id');

  const [name, setName] = useState('');

  useEffect(() => {
    // @ts-ignore
    const { data } = axios.get<{ name: string }>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .catch((error) => { throw error; });

    setName(data?.name);
  }, []);

  const nameState = useContext(NameStateContext);

  console.log('render useGet ', name);

  return (
    <div className="section name">
      {nameState.name as string}
      {name}
      {' '}
      {nameState.isLoading && (<Skeleton />)}
    </div>
  );

  async function testR() {

  }
}

export default customErrorBoundary(observer(Name));
