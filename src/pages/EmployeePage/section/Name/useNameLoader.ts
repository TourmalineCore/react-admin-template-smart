import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGet } from '../../../../common/hooks/useGet';
import NameStateContext from './NameStateContext';

export const useNameLoader = () => {
  const [params] = useSearchParams();
  const id = params.get('id');

  const nameState = useContext(NameStateContext);

  const { isLoading, data } = useGet({
    url: `users/${id}`,
    errorMessage: 'Error get name',
  });

  nameState.setName(data?.name);
  nameState.setIsLoading(isLoading);

  return { isLoading, data };
};
