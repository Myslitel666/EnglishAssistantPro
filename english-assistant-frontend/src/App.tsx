import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ColorModeProvider } from './ColorModeContext';
import Home from './Components/Pages/Home/Home';
import Register from '../src/Components/Pages/Registration/Registration';
import '../src/App.css'

function App() {
    return (
        <ColorModeProvider>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route
                        path="/English-Assistant-Pro"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <Register />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </ColorModeProvider>
    );
}

export default App;
