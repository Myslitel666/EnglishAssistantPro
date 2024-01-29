//MUI Import
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import KeyIcon from '../Register/RegisterIco'
import { useTheme } from '@mui/material';

//MyComponents Import
import Header from '../../Common/Header/Header';
import MyButton from '../../Common/MyButton';
import MyLink from '../../Common/MyLink';

const Register: React.FC = () => {
    const theme = useTheme();
    const KeyIconColor = theme.palette.background.default;

    return (
        <>
            <Header/>
            <Box
                //height='29.5rem'
                width='23.5rem'
                margin='8rem auto 0'
                border='1px solid'
                borderColor='#494949'
                borderRadius='2rem'
                textAlign='center'
                paddingLeft='1rem'
                paddingRight='1rem'
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    margin='1rem auto'
                    width="4.75rem"
                    height="4.75rem"
                    borderRadius="50%"
                    bgcolor="primary.main"
                    sx={{ transition: 'background-color 1s ease' } }
                >
                    <KeyIcon style={{
                            fill: KeyIconColor,
                            width: '2.88rem',
                            height: '2.88rem'
                        }}
                    />
                </Box>

                <Typography
                    marginTop='-0.7rem'
                    fontSize='1.66rem'
                    color='primary.main'
                >
                    Registration Form
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        marginTop: '0.6rem'
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        marginTop: '1rem'
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        marginTop: '1rem',
                        transition: 'background-color 1s ease'
                    }}
                />
                <MyButton
                    variant="contained"
                    sx={{
                        width: '100%',
                        height: '3.6rem',
                        transition: 'background-color 1s ease',
                        marginTop: '1rem',
                    }}
                >
                    <Typography
                        fontSize='1.12rem'
                    >
                        Create Account
                    </Typography>
                </MyButton>
                <Typography
                    fontSize='0.75rem'
                    sx={{
                        marginTop: '0.9rem',
                        marginBottom: '1rem',
                    }}
                >
                    Already have an account? 
                    <MyLink
                        fontSize='0.75rem'
                        marginLeft='0.25rem'
                    >
                        Sign in
                    </MyLink>
                </Typography>
            </Box>
        </>
    )
}

export default Register