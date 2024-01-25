import React, { useState } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material';

interface MyButtonProps extends TypographyProps {
    // Дополнительные свойства, если необходимо
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const theme = useTheme();
    const primaryMainColor = theme.palette.primary.main;
    const primaryDarkColor = theme.palette.text.primary;

    return (
        <Typography
            {...props}
            color={theme.palette.primary.main}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                cursor: 'pointer',
                color: isHovered ? `${primaryMainColor}` : `${primaryDarkColor}`,
                transition: 'color 1s ease'
            }}
        />
    );
};

export default MyButton;
