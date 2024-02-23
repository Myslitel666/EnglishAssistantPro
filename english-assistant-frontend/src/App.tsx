//React Import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//MUI Import
import { CssBaseline } from '@mui/material';

//MyComponents Import
import { ColorModeProvider } from '../src/Context/ColorModeContext';
import { UserProvider } from '../src/Context/UserContext';
import Home from './Components/Pages/Home/Home';
import Registration from '../src/Components/Pages/Registration/Registration';
import Authorization from '../src/Components/Pages/Authorization/Authorization';

//CSS Import
import '../src/App.css'

function App() {
    return (
        <ColorModeProvider>
        <UserProvider>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        
                    />
                    <Route
                        path="/home"
                        element={ <Home /> }
                    />
                    <Route
                        path="/reg"
                        element={ <Registration /> }
                    />
                    <Route
                        path="/auth"
                        element={ <Authorization /> }
                    />
                </Routes>
                </Router>
        </UserProvider>
        </ColorModeProvider>
    );
}

export default App;
