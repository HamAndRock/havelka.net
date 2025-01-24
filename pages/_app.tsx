import React from 'react';
import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { GlobalStyles } from '~/globalStyles';

function MyApp({ Component, pageProps } : AppProps) {
    return (
        <>
            <Analytics />
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
