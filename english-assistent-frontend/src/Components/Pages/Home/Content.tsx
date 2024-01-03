//MUI Import
import Box from '@mui/material/Box';

//MyCompoent Import
import LeftHalfScreen from '../Home/LeftHalfScreen'
import RightHalfScreen from '../Home/RightHalfScreen'

const Content: React.FC = () =>
{ 
    return (
        <>
            <Box width='60%' maxHeight='100vh'
                sx={{
                    float: 'left',
                    '@media screen and (max-width: 1000px)': {
                        float: 'none', width: '100%'
                    }
                }}
            >
                <LeftHalfScreen/>
            </Box>
            <Box padding='1rem' width='40%'
                paddingTop='11.2vh'
                sx={{
                    float: 'left',
                    '@media screen and (max-width: 1000px)': {
                        width: '100%',
                        paddingTop: '0.4rem'
                    }
                }}
            >
                <RightHalfScreen />
            </Box>
        </>
    );
}

export default Content;
