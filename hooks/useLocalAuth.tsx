import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { use_local_auth } from 'types';

/* <<--------------------------------------------------------->> */
const useLocalAuth = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  /* <<--------------------------------------------------------->> */

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  /* <<--------------------------------------------------------->> */

  useEffect(() => {
    checkAuth();
    return () => {
      setAuthenticated(false);
      setLoading(true);
    };
  }, []);

  /* <<--------------------------------------------------------->> */
  const result: use_local_auth = {
    loading: loading,
    authenticated: authenticated,
  };
  return result;
  /* <<--------------------------------------------------------->> */
};
export default useLocalAuth;
