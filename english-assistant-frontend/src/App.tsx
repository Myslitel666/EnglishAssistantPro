import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ColorModeProvider } from './ColorModeContext'; // Импортируйте ColorModeProvider
import Home from './Components/Pages/Home/Home';
import '../src/App.css'

function App() {
    return (
        <ColorModeProvider>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <Home />
                            </div>
                        }
                    />
                </Routes>
            </Router>
        </ColorModeProvider>
    );
}

export default App;
