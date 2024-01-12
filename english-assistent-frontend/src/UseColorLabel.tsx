import { useState, useEffect } from 'react';
import { useColorMode, ColorModeContextProps } from '../src/ColorModeContext';

export const useColorLabel = (initialLabel: string) => {
    const { themeMode, primaryColor }: ColorModeContextProps = useColorMode();

    //�������������� ����� � ����
    const getColorFromLabel = (label: string): string => {
        if (themeMode === 'dark' && label === 'green') {
            return '#00ff00';
        } else if (themeMode === 'light' && label === 'green') {
            return '#0da631';
        } else if (themeMode === 'dark' && label === 'red') {
            return '#ff0000';
        } else if (themeMode === 'light' && label === 'red') {
            return '#a60d0d';
        } else {
            // ������� �������� �� ��������� ��� ��� ������ �������
            return '#a60d0d';
        }
    };

    //��������� ����� �� �������� �����
    const getLabelFromColor = (): string => {
        if (primaryColor === '#00ff00' || primaryColor === '#0da631') {
            return 'green';
        } else if (primaryColor === '#ff0000' || primaryColor === '#a60d0d') {
            return 'red';
        } else {
            // ������� �������� �� ��������� ��� ��� ������ �������
            return 'red';
        }
    };

    return { getColorFromLabel, getLabelFromColor };
};