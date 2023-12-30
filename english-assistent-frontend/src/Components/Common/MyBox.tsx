import React, { useState } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material/';

//CSS Import
import '../Common/MyBox.css';

interface MyButtonProps extends BoxProps {
    // Дополнительные свойства, если необходимо
}

const MyBox: React.FC<MyButtonProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const theme = useTheme();
    const PrimaryMainColor = theme.palette.primary.main;
    const PrimaryDarkColor = theme.palette.primary.dark;

    return (
        <Box
            {...props}
            className="product-box"
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={handleMouseLeave}
            sx={{
                border: `1px solid ${isHovered ? PrimaryDarkColor : PrimaryMainColor}`,
                borderRadius: '10px',
                padding: '10px',
                cursor: 'pointer',
                transition: 'border-color 1s ease, transform 0.3s ease,'
            }}
        />
    );
};

export default MyBox;
