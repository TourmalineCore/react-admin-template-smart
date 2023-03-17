import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGet } from '../../../../common/hooks/useGet';
import NameStateContext from './NameStateContext';

export const useNameLoader = () => {
  const [params] = useSearchParams();
  const id = params.get(`id`);

  const nameState = useContext(NameStateContext);

  const { isLoading, response } = useGet<{ name: string }>({
    url: `users/${id}`,
  });

  nameState.setName(response?.name as string);
  nameState.setIsLoading(isLoading);
};
