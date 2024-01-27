import React, { useState } from 'react';

//MUI Import
import Box from '@mui/material/Box'
import Button from '@mui/material/Box'
import RefreshIcon from '@mui/icons-material/Refresh';

//My components import
import { useHomeContext } from '../Home/HomeContext'
import DictionaryDataGrid from '../Home/DictionaryDataGrid'
import JargonFilter from '../Home/JargonFilter'

const LeftHalfScreen: React.FC = () => {
    //–абота с контекстом домашней страницы
    const { fetchJargon } = useHomeContext();

    const [rotation, setRotation] = useState(0);

    const handleClickRefreshIcon = () => {
        fetchJargon();
        setRotation(rotation + 360);
    }

    return (
        <>
            <Box
                sx={{
                    float: 'left',
                    cursor: 'pointer',
            }}>
                <RefreshIcon
                    onClick={() => handleClickRefreshIcon()}
                    sx={{
                        marginTop: '5.2rem',
                        marginLeft: '1rem',
                        fontSize: '1.85rem',
                        color: 'primary.main',
                        transform: `rotate(${rotation}deg)`,
                        transition: 'transform 0.6s ease',
                    }}
                />
                </Box>
            <JargonFilter />
            <DictionaryDataGrid />
        </>
    )
}

export default LeftHalfScreen;