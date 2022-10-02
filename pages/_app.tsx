import { Analytics } from 'components';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/globals.css';
import '../styles/normalize.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Analytics /> */}
      <div className='flex flex-row gap-4'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/public-users'>
          <a>Public Users</a>
        </Link>
        <Link href='/pvt-users'>
          <a>Private Users</a>
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
