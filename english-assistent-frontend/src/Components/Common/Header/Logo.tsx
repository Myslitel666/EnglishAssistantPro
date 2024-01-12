import React, { useState, useEffect } from 'react';
import './Logo.css';
import { useColorMode, ColorModeContextProps } from '../../../ColorModeContext';
//My Components Import
import { useColorLabel } from '../../../UseColorLabel';

const Logo = () => {
    const { getColorFromLabel, getLabelFromColor } = useColorLabel('green');
    const { themeMode }: ColorModeContextProps = useColorMode();

    const getLogoImage = () => {
        // Определите условия для выбора изображения в зависимости от значений
        // localStorage.getItem('themeMode') и localStorage.getItem('primaryColor')
        if (themeMode === 'light' && getLabelFromColor() === 'green') {
            return '/images/logo-light-green.png';
        } else if (themeMode === 'dark' && getLabelFromColor() === 'red') {
            return '/images/logo-dark-red.png';
        } else {
            // Вернуть значение по умолчанию или для других условий
            return '/images/default-logo.png';
        }
    };

    // useEffect срабатывает при изменении themeMode и primaryColor
    useEffect(() => {
        const logoImage = getLogoImage();
        // Здесь вы можете выполнить любые дополнительные действия с изображением
        console.log('Logo Image:', logoImage);
    }, [themeMode, getLabelFromColor]);

    return (
        <div className='logo' style={{ cursor: 'pointer', marginRight: '10px' }}>
            <img className='logo' src={getLogoImage()} alt="Store Icon" />
        </div>
    );
};

export default Logo;