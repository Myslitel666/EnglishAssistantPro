import React, { useState } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material';

interface MyTypographyProps extends TypographyProps {
    // Дополнительные свойства, если необходимо
}

const MyTypography: React.FC<MyTypographyProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const theme = useTheme();
    const primaryMainColor = theme.palette.primary.main;
    const TextPrimaryColor = theme.palette.text.primary;

    return (
        <Typography
            {...props}
            color={primaryMainColor}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                cursor: 'pointer',
                color: isHovered ? `${primaryMainColor}` : `${TextPrimaryColor}`,
                transition: 'color 1s ease'
            }}
        />
    );
};

export default MyTypography;
