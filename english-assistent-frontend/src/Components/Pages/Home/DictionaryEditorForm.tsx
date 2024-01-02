//MUI Import
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//MyComponents Import
import MyInputBase from '../../Common/MyInputBase';
import MyButton from '../../Common/MyTypography';

const DictionaryEditorForm: React.FC = () => {
    return (
        <>
            <Box display = 'flex'>
                <Box alignItems = 'center'
                    marginRight = '0.6rem'

                    sx={{
                        textAlign: 'right',
                        float: 'left'
                    }}
                >
                <Typography
                    fontSize = '1.5rem'
                    marginBottom = '1.5rem'
                >
                    Jargon:
                </Typography>
                <Typography
                    fontSize = '1.5rem'
                >
                    Translate:
                </Typography>
            </Box>
            <Box alignItems = 'center'
                sx={{ float: 'left' }}
            >
                <Box paddingRight = '0.6rem'
                    display = 'flex'
                    paddingBottom = '0.6rem'

                    sx={{
                        float: 'left',
                        width: '62%'
                    }}
                >
                    <MyInputBase 
                        style={{
                            height: '2.5rem',
                            marginBottom: '0.6rem',
                            float: 'left',
                            width: '100%'
                        }}
                    />
                </Box>
                <Box display='flex' sx={{ float: 'left' }} width='38%'>
                    <Typography
                        fontSize = '1.5rem'
                        sx={{
                            float: 'left',
                            marginRight: '0.6rem'
                        }}
                    >
                        Id:
                    </Typography>
                    <MyInputBase
                        fullWidth
                        style={{
                            float: 'left',
                            height: '2.5rem',
                        }} 
                    />
                </Box>
                <MyInputBase
                    fullWidth
                    style={{
                        height: '2.5rem',
                    }} 
                />
                </Box>
            </Box>
                
        </>
    )
}

export default DictionaryEditorForm;