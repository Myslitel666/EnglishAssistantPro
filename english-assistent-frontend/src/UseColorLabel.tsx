import { useState, useEffect } from 'react';
import { useColorMode, ColorModeContextProps } from '../src/ColorModeContext';

export const useColorLabel = (initialLabel: string) => {
    const { themeMode, primaryColor }: ColorModeContextProps = useColorMode();

    //�������������� ����� � ����
    const getColorFromLabel = (label: string): string => {
        if (themeMode === 'dark' && label === 'green') {
            return '#21ff21';
        } else if (themeMode === 'light' && label === 'green') {
            return '#10b313';
        } else if (themeMode === 'dark' && label === 'red') {
            return '#f20000';
        } else if (themeMode === 'light' && label === 'red') {
            return '#de1d2a';
        } else {
            // ������� �������� �� ��������� ��� ��� ������ �������
            return '#a60d0d';
        }
    };

    //��������� ����� �� �������� �����
    const getLabelFromColor = (): string => {
        if (primaryColor === '#21ff21' || primaryColor === '#10b313') {
            return 'green';
        } else if (primaryColor === '#f20000' || primaryColor === '#de1d2a') {
            return 'red';
        } else {
            // ������� �������� �� ��������� ��� ��� ������ �������
            return 'red';
        }
    };

    return { getColorFromLabel, getLabelFromColor };
};