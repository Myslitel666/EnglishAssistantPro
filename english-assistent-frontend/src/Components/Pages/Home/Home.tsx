import React from 'react';
import Box from '@mui/material/Box';

//MyComponents Import
import Header from '../../Common/Header/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Box bgcolor='#FF1A1A' width='50%'
                minHeight='100vh' style={{ float: 'left' }}
            >
            </Box>
            <Box bgcolor='#FA14FF' width='50%'
                minHeight='100vh' style={{ float: 'left', }}>
            </Box>
        </div>
    );
};

export default Home;