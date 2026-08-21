import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import Home from './pages/Home';
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* 존재하지 않는 주소 */}
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
