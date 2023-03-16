import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import withErrorBoundary from '../../../../common/HOC/withErrorBoundary';
import NameStateContext from './NameStateContext';

function Name() {
  const [params] = useSearchParams();
  const id = params.get(`id`);

  const [name, setName] = useState(``);

  useEffect(() => {
    // @ts-ignore
    const { data } = axios.get<{ name: string }>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .catch((error) => { throw error; });

    setName(data?.name);
  }, []);

  const nameState = useContext(NameStateContext);

  return (
    <div className="section name">
      {nameState.name as string}
      {name}
      {` `}
      {nameState.isLoading && (<Skeleton />)}
    </div>
  );
}

export default withErrorBoundary(observer(Name));
