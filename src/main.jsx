import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize';
import './index.css'; 
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
