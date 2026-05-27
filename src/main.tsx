import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import { store } from './app/store.ts';
import { ThemeProvider } from './context/ThemeContext.tsx';
import './index.css';
import NotFoundPage from './pages/NotFoundPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
