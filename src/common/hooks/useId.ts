import { useSearchParams } from 'react-router-dom';

function useId() {
  const [params] = useSearchParams();
  const id = params.get(`id`);

  return {
    id,
  };
}

export default useId;
