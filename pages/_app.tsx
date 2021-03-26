import React from 'react';
import { GlobalStyles } from '~/globalStyles';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps } : AppProps) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
