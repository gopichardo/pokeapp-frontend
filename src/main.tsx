import { createRoot } from 'react-dom/client'
import './index.css'
import { PokeaApp } from './PokeaApp'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PokeaApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  );
}
else {
  console.error("Could not find the root container element.");
}
