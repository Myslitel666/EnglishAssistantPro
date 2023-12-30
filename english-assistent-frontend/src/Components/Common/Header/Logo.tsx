import React, { useState } from 'react';

//CSS Import
import './Logo.css';
import { useColorMode } from '../../../ColorModeContext';

const Logo = () => {
    const { toggleColorMode } = useColorMode();
    const [isNeedChangeIcon, setIsNeedChangeIcon] = useState(false);
    const [isFirstImage, setIsFirstImage] = useState(true);

    const [isHovered, setIsHovered] = useState(false);

    //Наведение мыши на Object
    const handleMouseEnter = () => {
        toggleImages();
        setIsNeedChangeIcon(true);

        setIsHovered(true);
    };

    //Курсор мыши покидает область изображения
    const handleMouseLeave = () => {
        if (isNeedChangeIcon) {
            toggleImages();
            setIsNeedChangeIcon(false);
        }

        setIsHovered(false);
    };

    //Щелчок по изображению
    const handleThemeToggle = () => {
        toggleColorMode();
        setIsNeedChangeIcon(!isNeedChangeIcon);
    };

    //Смена изображения
    const toggleImages = () => {
        setIsFirstImage(prevState => !prevState);
    };

    return (
        <div className={`logo ${isHovered ? 'hovered' : ''}`}
            onClick={handleThemeToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer', marginRight: '10px' }}
        >
            <img className={`image ${isHovered ? 'hidden' : ''}`}
                src={isFirstImage ? '/images/store-x.png' : '/images/store-hover.png'}
                alt="Store Icon"
            />
            <img className={`image ${isHovered ? '' : 'hidden'}`}
                src={isFirstImage ? '/images/store-x.png' : '/images/store-hover.png'}
                alt="Store Icon"
            />
        </div>
    );
};

export default Logo;
