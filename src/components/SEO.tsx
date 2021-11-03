import Head from 'next/head';
import React from 'react';

export const SEO = () => {
    const title = 'Jakub Havelka - Software Engineer';
    const description = 'React developer s dlouholetou zkušeností ve tvorbě webových aplikací a jejich následnou optimalizací.';

    return (
        <Head>
            <title>{title}</title>
            <link rel="preconnect" href="https://www.google-analytics.com" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167812975-1" />
            <script dangerouslySetInnerHTML={{
                __html:
                                `
         window.dataLayer = window.dataLayer || [];
         function gtag() {
                 dataLayer.push(arguments);
         }
 
         gtag('js', new Date());
 
         gtag('config', 'UA-167812975-1');
        `,
            }}
            />

            <meta
                name="description"
                content={description}
            />

            <meta name="robots" content="index, follow" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />

            <meta property="og:url" content="https://havelka.net" />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://havelka.net/kuba.png" />
            <meta property="og:description" content={description} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@J_Havelka" />
            <meta name="twitter:creator" content="@J_Havelka" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://havelka.net/images/profile.jpg" />

        </Head>
    );
};
