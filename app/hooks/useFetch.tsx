import {useState, useEffect} from 'react';
import {apiClient} from '../api/apiClient';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);

    apiClient
      .get(url)
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return [data, isLoading, error];
};

export default useFetch;
