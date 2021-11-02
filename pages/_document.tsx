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
                        <meta name="viewport" content="width=device-width" />
                        <link rel="stylesheet" href="/fonts/fonts.css" />
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
