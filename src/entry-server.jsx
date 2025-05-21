import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js';

import { Helmet } from 'react-helmet'
import App from './App'

export async function render(url) {
  let ssrData = null;

  if (url.startsWith('/product/')) {
    const id = url.split('/product/')[1];
    const res = await fetch(`https://infogujarat.in/api/news_details/1/${id}`);
    ssrData = await res.json();
  }

  const html = renderToString(
    <StaticRouter location={url}>
      <App initialData={ssrData} /> {/* 👈 pass data */}
    </StaticRouter>
  )

  const helmet = Helmet.renderStatic()

  const head = `
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  `

  return { html, head }
}
