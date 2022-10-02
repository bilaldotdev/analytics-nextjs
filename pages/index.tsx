import React, {
  ReactComponentElement,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import axios from 'axios';
import Image from 'next/image';
import { ActiveLink, Analytics } from 'components';
import { Navbar } from 'page-components';
import io from 'socket.io-client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { isAfter, parseISO } from 'date-fns';
import { ALL_TASKS } from '../constants/mock';
import { Grid } from '@mui/material';
import Head from 'next/head';
import Script from 'next/script';
/* <<-------------------------LAZY-------------------------------->> */
const LazyComponent = dynamic(() => import('../components/lazy/LazyComponent'), {
  ssr: false,
  suspense: false,
});
/* <<--------------------------------------------------------->> */

const LandingPage = () => {
  const dragContainer = useRef(null);
  const [show, setShow] = useState(false);
  const [sortedArray, setSortedArray] = useState<Array<any>>([]);
  const script_code = `<script async src='https://www.googletagmanager.com/gtag/js?id=G-J172X0MJJB'></script>
              <script> 
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-J172X0MJJB');
              </script>`;
  /* dynamic classes work only if that class is not already applied */
  /* <<--------------------------------------------------------->> */
  const loadAnalytics = (): void => {
    let generated_scripts: Array<Node> = [];
    let temp_div = document.createElement('div');
    temp_div.innerHTML = script_code;
    let tags = temp_div.getElementsByTagName('script');
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].innerText) {
        let temp_script = document.createElement('script');
        temp_script.innerHTML = `${tags[i].innerText}`;
        generated_scripts.push(temp_script);
      } else {
        let temp_script = document.createElement('script');
        temp_script.async = true;
        temp_script.src = tags[i].src;
        generated_scripts.push(temp_script);
      }
    }
    for (let i = 0; i < generated_scripts.length; i++) {
      console.log(generated_scripts[i], 'generated_scripts');
    }

    setTimeout(() => {
      for (let i = 0; i < generated_scripts.length; i++) {
        document.head.appendChild(generated_scripts[i]);
      }
    }, 4000);
  };
  /* <<--------------------------------------------------------->> */
  useEffect(() => {
    loadAnalytics();
  }, []);
  /* <<--------------------------------------------------------->> */
  return (
    <div>
      <Head>
        <title>Analytics</title>
      </Head>
      {/* <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-J172X0MJJB'
      ></Script>
      <Script strategy='afterInteractive' id='gtag'>
        {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-J172X0MJJB');`}
      </Script> */}
      <div className='container mx-auto'>
        <h1 className='text-5xl text-center'>ANALYTICS</h1>
      </div>
    </div>
  );
};

export default LandingPage;
