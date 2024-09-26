import { createRoot } from 'react-dom/client'
import './index.css'
import { PokeaApp } from './PokeaApp'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'



const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  {    /**
  * TODO - Implement Store State mechanism
  * - Implement Provider react-redux
  * - Implement Store
  */}

  root.render(<React.StrictMode>
    <BrowserRouter>
      <PokeaApp />
    </BrowserRouter>
  </React.StrictMode>,);
}
else {
  console.error("Could not find the root container element.");
}
