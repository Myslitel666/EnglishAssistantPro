import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material';
import '../src/Font.css';

interface ColorModeContextProps {
    toggleColorMode: () => void;
    setThemeMode: (mode: 'light' | 'dark') => void;
    theme: Theme;
    setPrimaryColor: (color: string) => void;
}

const ColorModeContext = createContext<ColorModeContextProps | undefined>(undefined);

export const useColorMode = () => {
    const context = useContext(ColorModeContext);
    if (!context) {
        throw new Error('useColorMode must be used within a ColorModeProvider');
    }
    return context;
};

interface ColorModeProviderProps {
    children: ReactNode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
    const [primaryColor, setPrimaryColor] = useState<string>('#0fba81');

    const toggleColorMode = () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const setTheme = (mode: 'light' | 'dark') => {
        setThemeMode(mode);
    };

    const theme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: 'MyFont, sans-serif',
                },
                palette: {
                    mode: themeMode,
                    primary: {
                        main: primaryColor,
                    },
                    text: {
                        primary: themeMode === 'light' ? '#000000' : '#FFFFFF',
                    },
                    background: {
                        default: themeMode === 'light' ? '#FFFFFF' : '#060606',
                    },
                    action: {
                        disabledBackground: themeMode === 'light' ? '#FFFFFF' : '#252525',
                    },
                },
            }),
        [themeMode, primaryColor]
    );

    const contextValue = useMemo(() => {
        return { toggleColorMode, setThemeMode: setTheme, theme, setPrimaryColor };
    }, [themeMode, primaryColor]);

    return (
        <ColorModeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};
