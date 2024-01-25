import React, { useState } from 'react';

//MyComponents Import
import Logo from '../Header/Logo';
import ServiceName from './ServiceName';
import { useColorMode } from '../../../ColorModeContext';
import CustomizationModal from '../CustomizationModal/CustomizationModal'

//MUI Import
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
    const { toggleColorMode } = useColorMode();
    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: `${theme.palette.action.disabledBackground}`
                }}
            >
                <Toolbar style={{
                    paddingLeft: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    height: '4.1rem',
                    minHeight: '0',
                    }}
                >

                    <Logo />
                    <ServiceName />
                    <Box
                        display='flex'
                        sx={{
                            marginLeft: 'auto',
                        }}
                    >
                        <CustomizationModal />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
