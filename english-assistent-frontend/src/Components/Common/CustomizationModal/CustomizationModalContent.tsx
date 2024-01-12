//MUI Import
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import { useColorMode } from '../../../ColorModeContext';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function CustomizationModalContent() {
    const { toggleColorMode, setPrimaryColor, setThemeMode } = useColorMode();

    const handleModeThemeToggle = (theme: 'light' | 'dark') => {
        setThemeMode(theme);
    };

    const handlePrimaryColorToggle = (color: string) => {
        setPrimaryColor(color);
    };

    return (
        <>
            <Typography variant="h6" component="h2">
                Themes
            </Typography>
            <Box
                display='flex'
                justifyContent="center"
                sx={{
                    float: 'center'
                }}
            >
                <Button onClick={() => handleModeThemeToggle('dark')}>
                    <Brightness4Icon
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: 'text.primary',
                        }}
                    />
                </Button>
                <Button onClick={() => handleModeThemeToggle('light')}>
                    <LightModeIcon
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: 'text.primary',
                        }}
                    />
                </Button>
            </Box>
            <Typography variant="h6" component="h2">
                Primary color
            </Typography>
            <Box
                display='flex'
                justifyContent="center"
                sx={{
                    float: 'center'
                }}
            >
                <Button onClick={() => handlePrimaryColorToggle('#e81111')}>
                    <FiberManualRecordIcon
                        id = 'red'
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: '#e81111',
                        }}
                    />
                </Button>
                <Button onClick={() => handlePrimaryColorToggle('#e511e8')}>
                    <FiberManualRecordIcon
                        id='purple'
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: '#e11aff',
                        }}
                    />
                </Button>
                <Button onClick={() => handlePrimaryColorToggle('#0fba81')}>
                    <FiberManualRecordIcon
                        id='yellow'
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: '#0fba81',
                        }}
                    />
                </Button>
                <Button onClick={() => handlePrimaryColorToggle('#0ea5e9')}>
                    <FiberManualRecordIcon
                        id = 'blue'
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: '#0ea5e9',
                        }}
                    />
                </Button>
                <Button onClick={() => handlePrimaryColorToggle('#eab308')}>
                    <FiberManualRecordIcon
                        id='orange'
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: '#eab308',
                        }}
                    />
                </Button>
                <Button onClick={() => handlePrimaryColorToggle('#4f46e5')}>
                    <FiberManualRecordIcon
                        id='violet'
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: '#4f46e5',
                        }}
                    />
                </Button>
                <Button onClick={() => handlePrimaryColorToggle('#84cc16')}>
                    <FiberManualRecordIcon
                        id='light green'
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: '#84cc16',
                        }}
                    />
                </Button>
            </Box>
        </>
    )
}