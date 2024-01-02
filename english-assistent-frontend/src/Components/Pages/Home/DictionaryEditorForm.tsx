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
            <Typography
                fontSize = '1.5rem'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '0.4rem',
                    marginBottom: '0.4rem'
                }}
            >
                Example of use
            </Typography>
            <TextField
                multiline
                rows={3}

                sx={{
                    width: '100%',
                    '.css-130ozhh-MuiInputBase-root-MuiOutlinedInput-root': {
                        padding: '0.7rem',
                        fontSize: '1rem'
                    }
                }}
            />
            <Box paddingTop='0.9rem'
                display="flex"
                justifyContent = 'space-between'
            >

                <MyButton
                    variant="contained"
                    style={{
                        maxWidth: "13.5rem",
                        float: 'left',
                        width: '100%',
                        marginRight: '8px'
                    }}
                >
                    Modify
                </MyButton>
                <MyButton
                    variant="contained"
                    style={{
                        maxWidth: "13.5rem",
                        float: 'left',
                        width: '100%',
                        marginRight: '8px'
                    }}
                >
                    Add
                </MyButton>
                <MyButton
                    variant="contained"
                    style={{
                        maxWidth: "13.5rem",
                        float: 'left',
                        width: '100%',
                    }}
                >
                    Delete
                </MyButton>
            </Box>
        </>
    )
}

export default DictionaryEditorForm;