//React Import
import React, { useState, useEffect } from 'react';

//MUI Import
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import KeyIcon from '../Registration/RegistrationIco'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, useTheme } from '@mui/material';

//MyComponents Import
import Header from '../../Common/Header/Header';
import MyButton from '../../Common/MyButton';
import MyLink from '../../Common/MyLink';
import { useColorLabel } from '../../../UseColorLabel';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Registration: React.FC = () => {
    const theme = useTheme();
    const KeyIconColor = theme.palette.background.default;
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [cursorPosition, setCursorPosition] = React.useState<number | null>(null);

    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const [isError, setIsError] = useState(false);
    const { getColorFromLabel } = useColorLabel('green');

    useEffect(() => {
        // Восстанавливаем позицию курсора после рендеринга
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
            }
        }, 0);
    }, [showPassword]);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);

        inputRef.current?.setSelectionRange(cursorPosition, cursorPosition)
    }
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (inputRef.current) {
            // Сохраняем текущую позицию курсора
            setCursorPosition(inputRef.current.selectionStart);
        }
    };

    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    function hasDigits(str: string) {
        return /\d/.test(str);
    }

    const updateFeedbackMessage = (isError: boolean, message: string) => {
        setIsError(isError);
        setFeedbackMessage(message);
    };

    const handleRegistration = () => {
        if (username === '') updateFeedbackMessage(true, '✗Enter the "Username"')
        else if (password === '') updateFeedbackMessage(true, '✗Enter the "Password"')
        else if (confirmPassword === '') updateFeedbackMessage(true, '✗Enter the "Confirm Password"')
        else if (password.length < 6) updateFeedbackMessage(true, '✗The password must be at least 6 characters long')
        else if (!hasDigits(password)) updateFeedbackMessage(true, '✗The password must contain letters and numbers')
        else if (password !== confirmPassword) updateFeedbackMessage(true, '✗The password and confirmation password do not match')
        else updateFeedbackMessage(false, '✓Account successfully created')
    };

    return (
        <>
            <Header/>
            <Box
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
                <Typography sx={{
                        textAlign: 'left',
                    color: isError ? getColorFromLabel('red') : getColorFromLabel('green'),
                    }}
                >
                    { feedbackMessage }
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    sx={{
                        width: '100%',
                        marginTop: '0.6rem'
                    }}
                />
                <FormControl sx={{ width: '100%', marginTop: '1rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        label="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setCursorPosition(e.target.selectionStart); // Сохраняем позицию курсора
                        }}
                        onClick={() => {
                            
                            //inputRef.current?.setSelectionRange(cursorPosition, cursorPosition)
                        }} // Устанавливаем позицию курсора при клике
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        inputRef={inputRef}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl sx={{ width: '100%', marginTop: '1rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        label="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        type={showConfirmPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <MyButton
                    variant="contained"
                    onClick={handleRegistration}
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

export default Registration