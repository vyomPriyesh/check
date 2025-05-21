import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import ReactRouterDOM from 'react-router-dom'

const { StaticRouter } = ReactRouterDOM
// for react-router-dom v6
import { Helmet } from 'react-helmet'
import App from './App'

/**
 * @param {string} url
 */
export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )

  const helmet = Helmet.renderStatic()

  const head = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
  `

  return { html, head }
}
