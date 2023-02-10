import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import { Service } from '../common/utils/Services';

function Name() {
  const { isLoading, data: response, error } = useQuery({
    queryKey: ['name'],
    queryFn: () => Service.getName(),
  });

  if (error) {
    useErrorHandler(error);
  }

  console.log('isLoading', isLoading);
  console.log('datas', response?.data);
  return (
    <>
      <div>
        Name
        {' '}
        {isLoading && (<Skeleton height={40} />)}
      </div>
      <div className="card" />
    </>

  );
}

export default Name;
