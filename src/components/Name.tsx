import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { Service } from '../common/utils/Services';

function Name() {
  const [params] = useSearchParams();

  const id = params.get('id');

  const { isLoading, data: response, error } = useQuery({
    queryKey: ['name'],
    queryFn: () => Service.getName(id),
  });

  if (error) {
    useErrorHandler(error);
  }

  return (
    <>
      <div>
        { response?.data.name}
        {' '}
        {isLoading && (<Skeleton />)}
      </div>
      <div className="card" />
    </>

  );
}

export default Name;
