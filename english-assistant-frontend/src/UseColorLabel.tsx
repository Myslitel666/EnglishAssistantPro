import { useState, useEffect } from 'react';
import { useColorMode, ColorModeContextProps } from '../src/ColorModeContext';

export const useColorLabel = (initialLabel: string) => {
    const { themeMode, primaryColor }: ColorModeContextProps = useColorMode();

    //Преобразование метки в цвет
    const getColorFromLabel = (label: string): string => {
        if (themeMode === 'dark' && label === 'green') {
            return '#30e034';
        } else if (themeMode === 'light' && label === 'green') {
            return '#15b40d';
        } else if (themeMode === 'dark' && label === 'red') {
            return '#ff1111';
        } else if (themeMode === 'light' && label === 'red') {
            return '#cb0c0c';
        } else if (themeMode === 'dark' && label === 'purple') {
            return '#ef3eff';
        } else if (themeMode === 'light' && label === 'purple') {
            return '#b10ac0';
        } else if (themeMode === 'dark' && label === 'blue') {
            return '#2d85ff';
        } else if (themeMode === 'light' && label === 'blue') {
            return '#0c60d4';
        } else if (themeMode === 'dark' && label === 'orange') {
            return '#ffcd35';
        } else if (themeMode === 'light' && label === 'orange') {
            return '#db9f0f';
        } else if (themeMode === 'dark' && label === 'violet') {
            return '#9c1dff';
        } else if (themeMode === 'light' && label === 'violet') {
            return '#840ee0';
        } else if (themeMode === 'dark' && label === 'light green') {
            return '#bcff2d';
        } else if (themeMode === 'light' && label === 'light green') {
            return '#92c30f';
        } else {
            // Вернуть значение по умолчанию или для других условий
            return '#de1d2a';
        }
    };

    //Получение метки по текущему цвету
    const getLabelFromColor = (): string => {
        if (primaryColor === '#30e034' || primaryColor === '#15b40d') {
            return 'green';
        } else if (primaryColor === '#ff1111' || primaryColor === '#cb0c0c') {
            return 'red';
        } else if (primaryColor === '#ef3eff' || primaryColor === '#b10ac0') {
            return 'purple';
        } else if (primaryColor === '#2d85ff' || primaryColor === '#0c60d4') {
            return 'blue';
        } else if (primaryColor === '#ffcd35' || primaryColor === '#db9f0f') {
            return 'orange';
        } else if (primaryColor === '#9c1dff' || primaryColor === '#840ee0') {
            return 'violet';
        } else if (primaryColor === '#bcff2d' || primaryColor === '#92c30f') {
            return 'light green';
        } else {
            // Вернуть значение по умолчанию или для других условий
            return 'red';
        }
    };

    return { getColorFromLabel, getLabelFromColor };
};