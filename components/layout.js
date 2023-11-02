// components/Layout.js

import Head from 'next/head';
import { useEffect } from 'react';
import { initBackgroundEffect } from '../lib/backgroundEffect';


const Layout = ({ children, title = 'Aethereal Nexus' }) => {
  useEffect(() => {
    initBackgroundEffect();
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="background-canvas"></div> {/* Ensure this div is styled to cover the screen */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
