import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { StrictMode } from 'react'
import { Helmet } from 'react-helmet'
import App from './App'

export function render(url) {
  const html = renderToString(
    // <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    // </StrictMode>
  )

  const helmet = Helmet.renderStatic()

  console.log(helmet)

  const head = `
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
  `

  return { html, head }
}
