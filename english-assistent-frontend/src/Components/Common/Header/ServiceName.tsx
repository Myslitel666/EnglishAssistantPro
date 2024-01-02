import React, { useState } from 'react';

//MUI Import
import Typography from '@mui/material/Typography';  
import { useTheme } from '@mui/material/styles';

const ServiceName: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const theme = useTheme();
    const primaryMainColor = theme.palette.primary.main;
    const primaryDarkColor = theme.palette.primary.dark;

    return (
        <Typography
            fontSize = '2.3rem'
            color={theme.palette.primary.main}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                cursor: 'pointer',
                color: isHovered ? `${primaryDarkColor}` : `${primaryMainColor}`,
                transition: 'color 1s ease',
                '@media screen and (max-width: 600px)': {
                    fontSize: '30px'
                }
            }}
        >
            EnglishAssistent Pro
        </Typography>
    );
};

export default ServiceName;