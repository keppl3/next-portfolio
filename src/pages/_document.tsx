import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel='icon' href='/logo.svg'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
