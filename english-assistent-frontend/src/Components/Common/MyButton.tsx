import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface MyButtonProps extends ButtonProps {
    // Дополнительные свойства, если необходимо
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    return (
        <Button
            {...props}
            sx={{
                transition: 'background-color 1s ease, color 1s ease, border-color 1s ease'
                //...props.sx // Позволяет вам передавать другие стили через props
            }}
        />
    );
};

export default MyButton;
