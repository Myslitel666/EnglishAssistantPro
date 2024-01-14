import { useState, useEffect } from 'react';

//MUI Import
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

//My Components Import
import { useColorLabel } from '../../../UseColorLabel';
import { useColorMode, ColorModeContextProps } from '../../../ColorModeContext';

export default function CustomizationModalContent() {
    const { setPrimaryColor, setThemeMode } = useColorMode();
    const { getColorFromLabel, getLabelFromColor } = useColorLabel('green');
    const { themeMode }: ColorModeContextProps = useColorMode();

    const handleModeThemeToggle = (theme: 'light' | 'dark') => {
        setThemeMode(theme);
    };

    const handlePrimaryColorToggle = (labelColor: string) => {
        const currentColor = getColorFromLabel(labelColor);
        setPrimaryColor(currentColor);
    };

    //��������� ������� primary color ��� ��������� ����
    useEffect(() => {
        const labelColor = getLabelFromColor();
        const primaryColorWithTheme = getColorFromLabel(labelColor);
        setPrimaryColor(primaryColorWithTheme);
    }, [themeMode]);

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
                <Button onClick={() => handlePrimaryColorToggle('red')}>
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
                <Button onClick={() => handlePrimaryColorToggle('green')}>
                    <FiberManualRecordIcon
                        id='green'
                        sx={{
                            fontSize: '3.2rem',
                            padding: '0.3rem',
                            borderRadius: '4px',
                            color: '#13c216',
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