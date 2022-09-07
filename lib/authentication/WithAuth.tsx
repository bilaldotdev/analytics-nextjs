import { CircularProgress } from '@mui/material';
import { useLocalAuth } from 'hooks';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

type with_auth_type = {
  children: ReactNode;
  redirect?: string;
};
type redirect_props = {
  to?: string;
};
const WithAuth = (props: with_auth_type) => {
  const { authenticated, loading } = useLocalAuth();
  const children: ReactNode = props.children;
  const { redirect } = props;

  if (loading) {
    return <Loader />;
  }
  if (!authenticated) {
    return <Redirecting to={redirect ? redirect : '/'} />;
  }
  return <>{children}</>;
};

export default WithAuth;

const Loader = () => {
  return (
    <div style={{ minHeight: '96vh' }} className='flex items-center justify-center'>
      <CircularProgress size='2rem' />
    </div>
  );
};

const Redirecting = (props: redirect_props) => {
  const { to } = props;
  const router = useRouter();
  router.replace(`${to ? to : '/'}`);

  return (
    <div style={{ minHeight: '96vh' }} className='flex items-center justify-center'>
      <div className='flex items-center gap-2 justify-center'>
        <CircularProgress size='2rem' />
        <p>Redirecting...</p>
      </div>
    </div>
  );
};
