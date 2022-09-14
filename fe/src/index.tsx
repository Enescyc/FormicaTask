import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import AuthProvider from './context/authContext';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider>
     <App></App>
    </AuthProvider>

    
);

