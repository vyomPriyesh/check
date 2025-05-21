import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import AppWrapper from './AppWrapper'

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <AppWrapper />
  </StrictMode>
)
