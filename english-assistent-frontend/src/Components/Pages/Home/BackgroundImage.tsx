import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import '../../Common/Header/Logo.css';
import { useColorMode, ColorModeContextProps } from '../../../ColorModeContext';
import { useColorLabel } from '../../../UseColorLabel';

const BackgroundImage: React.FC = () => {
    const { getColorFromLabel, getLabelFromColor } = useColorLabel('green');
    const { themeMode }: ColorModeContextProps = useColorMode();
    let defaultLogoPath = '';
    if (themeMode === 'light') defaultLogoPath = '/images/background-light-green.png';
    else defaultLogoPath = '/images/background-dark-red.png';

    const [oldLogoPath, setOldLogoPath] = useState(defaultLogoPath);
    const [newLogoPath, setNewLogoPath] = useState(defaultLogoPath);
    const [isThemeChanged, setIsThemeChanged] = useState(true);

    const getLogoImage = () => {
        // ќпределите услови€ дл€ выбора изображени€ в зависимости от значений
        // localStorage.getItem('themeMode') и localStorage.getItem('primaryColor')
        if (themeMode === 'light' && getLabelFromColor() === 'green') {
            return '/images/background-light-green.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'green') {
            return '/images/background-dark-green.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'red') {
            return '/images/background-light-red.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'red') {
            return '/images/background-dark-red.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'purple') {
            return '/images/background-light-purple.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'purple') {
            return '/images/background-dark-purple.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'blue') {
            return '/images/background-light-blue.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'blue') {
            return '/images/background-dark-blue.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'orange') {
            return '/images/background-light-orange.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'orange') {
            return '/images/background-dark-orange.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'violet') {
            return '/images/background-light-violet.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'violet') {
            return '/images/background-dark-violet.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'light green') {
            return '/images/background-light-light-green.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'light green') {
            return '/images/background-dark-light-green.png';
        } else {
            // ¬ернуть значение по умолчанию или дл€ других условий
            return '/images/logo-light-green.png';
        }
    };

    useEffect(() => {
        const currentLogoPath = getLogoImage();

        const delayedUpdate = () => {
            const delay = 1; // задержка в миллисекундах

            setTimeout(() => {
                if (newLogoPath !== currentLogoPath) {
                    setOldLogoPath(newLogoPath);
                    setNewLogoPath(currentLogoPath);
                    setIsThemeChanged(!isThemeChanged);
                    console.log(isThemeChanged);
                }
            }, delay);
        };

        delayedUpdate();
    }, [themeMode, getLabelFromColor]);

    return (
        <Box
            sx = {{
                height: '7.5rem', 
                width: '100%',
                position: 'relative',
                '@media screen and (max-width: 1400px)': {
                    height: '6.2rem',
                },
                '@media screen and (max-width: 1200px)': {
                    height: '5.3rem',
                },
                '@media screen and (max-width: 1000px)': {
                    height: '11.5rem',
                },
                '@media screen and (max-width: 800px)': {
                    height: '9rem',
                },
                '@media screen and (max-width: 600px)': {
                    height: '7rem',
                }
            }}
        >
            <img
                className={`image ${isThemeChanged ? '' : 'hidden'}`}
                src={`${isThemeChanged ? oldLogoPath : newLogoPath}`}
                alt="background"
                style={{
                    maxWidth: '100%',
                    height: '100%',
                }}
            />
            <img
                className={`image ${isThemeChanged ? 'hidden' : ''}`}
                src={`${isThemeChanged ? newLogoPath : oldLogoPath}`}
                alt="background"
                style={{
                    maxWidth: '100%',
                    height: '100%',
                }}
            />
        </Box>
    );
}

export default BackgroundImage;
