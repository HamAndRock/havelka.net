import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    // eslint-disable-next-line no-restricted-syntax
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `
                                    @font-face {
                                        font-family: "Poppins";
                                        src: url("/fonts/Poppins-Bold.woff2") format("woff2"),
                                             url("/fonts/Poppins-Bold.ttf") format("opentype");
                                        font-weight: bold;
                                        font-style: normal;
                                        font-display: swap;
                                    }
                                    
                                    @font-face {
                                        font-family: "Poppins";
                                        src: url("/fonts/Poppins-Medium.woff2") format("woff2"),
                                             url("/fonts/Poppins-Medium.ttf") format("opentype");
                                        font-weight: medium;
                                        font-style: normal;
                                        font-display: swap;
                                    }
                                    
                                    @font-face {
                                        font-family: "Poppins";
                                        src: url("/fonts/Poppins-Regular.woff2") format("woff2");
                                             url("/fonts/Poppins-Regular.ttf") format("opentype");
                                        font-weight: normal;
                                        font-style: normal;
                                        font-display: swap;
                                    }
                            `,
                            }}
                        />
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}
