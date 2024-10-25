import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

function Myapp() {
  return (
    <div>
      <h1>My Custom App</h1>
    </div>
  );
}

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the component
createRoot(rootElement).render(
  <StrictMode>
    <Myapp />
  </StrictMode>
);
