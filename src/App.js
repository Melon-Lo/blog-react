import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import components
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

// import contexts
import RWDContextProvider from './contexts/RWD';

function App() {
  return (
    <BrowserRouter>
      <RWDContextProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </RWDContextProvider>    
    </BrowserRouter>
  );
}

export default App;
