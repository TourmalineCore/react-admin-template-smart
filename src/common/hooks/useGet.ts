import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import { useErrorHandler } from 'react-error-boundary';

import { api } from '../utils/HttpClient';

export const useGet = <Type = any>({
  url,
  config,
  errorMessage = 'Error',
}:{
  url: string;
  config?:AxiosRequestConfig<Type>,
  errorMessage: string;
}) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['name'],
    queryFn: () => api.get<Type>(url, config)
      .then((response) => response.data)
      .catch((err) => { throw new Error(errorMessage, { cause: err }); }),
  });

  useErrorHandler(error);

  return { isLoading, data };
};
