import { FC } from 'react';

import Head from 'next/head';

import { Navbar } from '../ui';
import { capitalize } from '../../utils';

interface Props {
  title?: string;
  img?: string;
  children?: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props>= ({ children, title, img = '' }) => {
  title = title ? capitalize(title) : '';
  
  return (
    <>
      <Head>
        <meta name="author" content="Emmanuel Guariato" />
        <meta name="description" content={`Información sobre el pókemon ${ title }`} />
        <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
        {
          img?.length >  0
          ? <meta property="og:image" content={ img } />
          : <meta property="og:image" content={`${ origin }/_next/image?url=%2Fimgs%2Fbanner.png&w=640&q=75`} />
        }
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
        <title>{ title || 'Pokemon App' }</title>
      </Head>

      <Navbar />
      
      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>

    </>
  )
}
