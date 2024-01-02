//MUI Import
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

//MyComponents Import
import MyInputBase from '../../Common/MyInputBase';
import MyButton from '../../Common/MyButton';

const DictionaryEditorForm: React.FC = () => {
    return (
        <>
            <Box display = 'flex'>
                <Box alignItems = 'center'
                    marginRight = '0.7rem'

                    sx={{
                        textAlign: 'right',
                        float: 'left'
                    }}
                >
                <Typography
                    fontSize = '1.6rem'
                    marginBottom='1.2rem'
                    sx = {{
                        '@media screen and (max-width: 600px)': {
                            fontSize: '1.1rem',
                            marginTop: '0.3rem',
                            marginBottom: '2rem'
                        }
                    }}
                >
                    Jargon:
                </Typography>
                <Typography
                    fontSize = '1.6rem'
                    sx = {{
                        '@media screen and (max-width: 600px)': {
                            fontSize: '1.1rem',
                        }
                    }}
                >
                    Translate:
                </Typography>
            </Box>
            <Box alignItems = 'center'
                sx={{ float: 'left' }}
            >
                <Box paddingRight = '0.7rem'
                    display = 'flex'
                    paddingBottom = '0.7rem'
                    paddingTop = '0.1rem'

                    sx={{
                        float: 'left',
                        width: '62%',
                        '@media screen and (max-width: 600px)': {
                            width: '56%'
                        }
                    }}
                >
                    <MyInputBase 
                        style={{
                            height: '2.5rem',
                            marginBottom: '0.4rem',
                            float: 'left',
                            width: '100%'
                        }}
                    />
                </Box>
                    <Box
                        display='flex'
                        width='38%'
                        sx={{
                            float: 'left',
                            '@media screen and (max-width: 600px)': {
                                width: '44%'
                            }
                        }}
                    >
                    <Typography
                        fontSize = '1.5rem'
                        sx={{
                            float: 'left',
                            marginRight: '0.7rem',
                            '@media screen and (max-width: 600px)': {
                                fontSize: '1.1rem',
                                marginTop: '0.3rem'
                            }
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
            <Typography
                fontSize = '1.5rem'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    '@media screen and (max-width: 600px)': {
                        fontSize: '1.1rem',
                    }
                }}
            >
                Example of use
            </Typography>
            <TextField
                multiline
                rows={4}

                sx={{
                    width: '100%',
                    //red theme
                    '.css-130ozhh-MuiInputBase-root-MuiOutlinedInput-root': {
                        padding: '0.7rem',
                        fontSize: '1rem'
                    },
                    //purple theme
                    '.css-1rd94on-MuiInputBase-root-MuiOutlinedInput-root': {
                        padding: '0.7rem',
                        fontSize: '1rem'
                    }
                }}
            />
            <Box paddingTop='0.7rem'
                display="flex"
                justifyContent = 'space-between'
            >

                <MyButton
                    variant="contained"
                    style={{
                        float: 'left',
                        width: '100%',
                        marginRight: '8px',
                        fontSize: '1.2rem'
                    }}
                >
                    Modify
                </MyButton>
                <MyButton
                    variant="contained"
                    style={{
                        float: 'left',
                        width: '100%',
                        marginRight: '8px',
                        fontSize: '1.2rem',
                    }}
                >
                    Add
                </MyButton>
                <MyButton
                    variant="contained"
                    style={{
                        float: 'left',
                        width: '100%',
                        fontSize: '1.2rem'
                    }}
                >
                    Delete
                </MyButton>
            </Box>
        </>
    )
}

export default DictionaryEditorForm;