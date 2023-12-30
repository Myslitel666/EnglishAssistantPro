import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material';

interface ColorModeContextProps {
    toggleColorMode: () => void;
    theme: Theme;
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
    const [MyTheme, setMyTheme] = useState<'red' | 'purple'>('red');

    const toggleColorMode = () => {
        setMyTheme(prevMode => (prevMode === 'red' ? 'purple' : 'red'));
    };

    const theme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: 'Merienda, cursive'
                },
                palette: {
                    mode: 'dark', // âñåãäà ôèêñèðîâàííûé ðåæèì dark
                    primary: {
                        main: MyTheme === 'red' ? '#FF1A1A' : '#FF19F8',
                        dark: MyTheme === 'red' ? '#FF19F8' : '#FF1A1A',
                    },
                    text: {
                        primary: '#FFFFFF', // Устанавливаем цвет основного текста в темной теме
                        secondary: '#CCCCCC', // Устанавливаем цвет второстепенного текста в темной теме (например, для подзаголовков и т. д.)
                    },
                    background: {
                        default: '#060606'
                    },
                },
            }),
        [MyTheme]
    );

    const contextValue = useMemo(() => {
        return { toggleColorMode, theme };
    }, [MyTheme]);

    return (
        <ColorModeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};