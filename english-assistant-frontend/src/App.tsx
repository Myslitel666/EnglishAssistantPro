import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ColorModeProvider } from './ColorModeContext';
import Home from './Components/Pages/Home/Home';
import Registration from '../src/Components/Pages/Registration/Registration';
import Authorization from '../src/Components/Pages/Authorization/Authorization';
import '../src/App.css'

function App() {
    return (
        <ColorModeProvider>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route
                        path="/home"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/reg"
                        element={
                            <>
                                <Registration />
                            </>
                        }
                    />
                    <Route
                        path="/auth"
                        element={
                            <>
                                <Authorization />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </ColorModeProvider>
    );
}

export default App;
