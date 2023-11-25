import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './main.sass'
import App from './components/app/app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
