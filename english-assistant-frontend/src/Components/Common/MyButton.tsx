import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { useColorMode, ColorModeContextProps } from '../../ColorModeContext';

interface MyButtonProps extends ButtonProps {
    // Дополнительные свойства, если необходимо
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    return (
        <Button
            {...props}
            disableElevation
            sx={{
                transition: 'background-color 1s ease, color 1s ease, border-color 1s ease',
                border: 1,
                '&:hover': {
                    border: 1,
                }
                //...props.sx // Позволяет вам передавать другие стили через props
            }}
        />
    );
};

export default MyButton;
