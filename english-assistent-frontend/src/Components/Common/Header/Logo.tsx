import React, { useState, useEffect } from 'react';
import './Logo.css';
import { useColorMode, ColorModeContextProps } from '../../../ColorModeContext';

const Logo = () => {
    const { themeMode, primaryColor }: ColorModeContextProps = useColorMode();

    const getLogoImage = () => {
        // Определите условия для выбора изображения в зависимости от значений
        // localStorage.getItem('themeMode') и localStorage.getItem('primaryColor')
        if (themeMode === 'light' && primaryColor === '#0fba81') {
            return '/images/logo-light-green.png';
        } else if (themeMode === 'dark' && primaryColor === '#e81111') {
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
    }, [themeMode, primaryColor]);

    return (
        <div className='logo' style={{ cursor: 'pointer', marginRight: '10px' }}>
            <img className='logo' src={getLogoImage()} alt="Store Icon" />
        </div>
    );
};

export default Logo;