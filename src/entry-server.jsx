import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import App from './App'

/**
 * @param {string} url
 */
export function render(url) {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
  
  // Collect helmet tags after render
  const helmet = Helmet.renderStatic()

  // Prepare head tags string
  const head = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
  `

  return { html, head }
}
