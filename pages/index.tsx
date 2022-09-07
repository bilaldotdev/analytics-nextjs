import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { ActiveLink } from 'components';
import { Navbar } from 'page-components';
import io from 'socket.io-client';
import Link from 'next/link';
const LandingPage = () => {
  const dragContainer = useRef(null);
  const [show, setShow] = useState(false);
  const toggle = () => {};
  /* dynamic classes work only if that class is not already applied */
  return (
    <div>
      {/* <Navbar /> */}

      <div className='container mx-auto'>
        <div id='section1' className='h-[22rem] my-8 bg-green-300 rounded md p-12'>
          Home Page
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
