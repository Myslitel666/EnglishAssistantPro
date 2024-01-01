//MUI Import
import Box from '@mui/material/Box';

//MyCompoent Import
import LeftHalfScreen from '../Home/LeftHalfScreen'
import RightHalfScreen from '../Home/RightHalfScreen'

const Content: React.FC = () =>
{ 
    return (
        <>
            <Box width='50%' maxHeight='100vh'
                style={{ float: 'left', }}
            >
                <LeftHalfScreen/>
            </Box>
            <Box paddingTop='11.2vh' width='50%'
                minHeight='100vh' padding='1.2vh'
                style={{ float: 'left', }}
            >
                <RightHalfScreen />
            </Box>
        </>
    );
}

export default Content;
