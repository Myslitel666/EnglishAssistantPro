import React, { useState } from 'react';

//MyComponents Import
import Logo from '../Header/Logo';
import ServiceName from './ServiceName';
import { useColorMode } from '../../../ColorModeContext';
import MyButton from '../MyButton';

//MUI Import
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Header: React.FC = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar style={{
                    backgroundColor: '#1E1E1E', paddingLeft: 0,
                    paddingTop: 0, paddingBottom: 0,
                    height: '70px'
                }}>
                    <Logo />
                    <ServiceName />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
