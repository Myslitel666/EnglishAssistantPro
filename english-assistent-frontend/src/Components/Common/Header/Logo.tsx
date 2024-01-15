import React, { useState, useEffect } from 'react';
import './Logo.css';
import { useColorMode, ColorModeContextProps } from '../../../ColorModeContext';
// My Components Import
import { useColorLabel } from '../../../UseColorLabel';

const Logo = () => {
    const { getColorFromLabel, getLabelFromColor } = useColorLabel('green');
    const { themeMode }: ColorModeContextProps = useColorMode();

    const [oldLogoPath, setOldLogoPath] = useState('logo-light-green.png');
    const [newLogoPath, setNewLogoPath] = useState('logo-light-green.png');

    const getLogoImage = () => {
        // Определите условия для выбора изображения в зависимости от значений
        // localStorage.getItem('themeMode') и localStorage.getItem('primaryColor')
        if (themeMode === 'light' && getLabelFromColor() === 'green') {
            return '/images/logo-light-green.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'green') {
            return '/images/logo-dark-green.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'red') {
            return '/images/logo-light-red.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'red') {
            return '/images/logo-dark-red.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'purple') {
            return '/images/logo-light-purple.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'purple') {
            return '/images/logo-dark-purple.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'blue') {
            return '/images/logo-light-blue.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'blue') {
            return '/images/logo-dark-blue.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'orange') {
            return '/images/logo-light-orange.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'orange') {
            return '/images/logo-dark-orange.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'violet') {
            return '/images/logo-light-violet.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'violet') {
            return '/images/logo-dark-violet.png';
        } else if (themeMode === 'light' && getLabelFromColor() === 'light green') {
            return '/images/logo-light-light-green.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'light green') {
            return '/images/logo-dark-light-green.png';
        } else {
            // Вернуть значение по умолчанию или для других условий
            return '/images/default-logo.png';
        }
    };

    useEffect(() => {
        setOldLogoPath(newLogoPath);
        setNewLogoPath(getLogoImage()); // Получаем новый путь

        if (oldLogoPath !== newLogoPath) {
            console.log('Old Logo Image:', oldLogoPath);
            console.log('New Logo Image:', newLogoPath);
        }

        //setLogoPath(newLogoPath); // Обновляем состояние с новым путем
    }, [themeMode, getLabelFromColor]);

    return (
        <div className='logo' style={{ cursor: 'pointer', marginRight: '10px' }}>
            <img className='logo' src={getLogoImage()} alt="Store Icon" />
        </div>
    );
};

export default Logo;
