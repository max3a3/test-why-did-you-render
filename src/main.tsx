//import "./wdyr";
console.log("VITE_ENABLE_WHY_DID_YOU_RENDER",import.meta.env.VITE_ENABLE_WHY_DID_YOU_RENDER)
if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_WHY_DID_YOU_RENDER === 'true') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
    const autoImport = import.meta.globEager('./wdyr.ts');
    // nothing needs to be done with this variable but one needs to be declared in order to import the module
}
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import App from "./BadApp"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
