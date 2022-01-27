import React, { Fragment } from 'react'
import Document, { Script, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import { Html } from "next/document";

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="http://fonts.cdnfonts.com/css/airbnb-cereal-app"
            rel="stylesheet"
          />
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

_Document.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: WrappedComponent => props => sheets.collect(<WrappedComponent {...props} />)
  })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  }
}

export default _Document
