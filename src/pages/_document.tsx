import Document, { Html, Main, NextScript, Head, DocumentContext, DocumentInitialProps } from 'next/document';
import { ReactElement } from 'react';
import { getCssText, reset } from 'styles/stitches.config';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    const getCssAndReset = () => {
      const css = getCssText();
      reset();
      return css;
    };

    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line react/no-danger */}
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
