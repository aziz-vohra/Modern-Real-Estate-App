import Head from 'next/head';
import { Box } from '@chakra-ui/react';

// import Footer from './Footer';
// import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <h2>Header</h2>
        </header>
        <main>{children}</main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </Box>
    </>
  );
}