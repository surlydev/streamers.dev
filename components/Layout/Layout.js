import Head from 'next/head';

import NavBar from '@/components/Layout/NavBar';
import Footer from '@/components/Layout/Footer';

export default function Layout({ page, description, children }) {
  return (
    <>
      <Head>
        <title>streamers.dev {page && `- ${page}`}</title>
        <meta name='description' content={description} />
      </Head>

      <div className='max-w-5xl mx-auto sm:px-7 py-4 sm:py-5'>
        <NavBar />

        {children}

        <Footer />
      </div>
    </>
  );
}
