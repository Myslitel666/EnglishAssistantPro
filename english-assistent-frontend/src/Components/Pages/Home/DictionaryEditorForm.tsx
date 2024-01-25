//React Import
import React, { useState } from 'react';

//MUI Import
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

//MyComponents Import
import MyInputBase from '../../Common/MyInputBase';
import MyButton from '../../Common/MyButton';

const DictionaryEditorForm: React.FC = () => {
    const [jargon, setJargon] = useState(''); 
    const [translate, setTranslate] = useState(''); 
    const [exampleOfUse, setExampleOfUse] = useState(''); 
    const [id, setId] = useState(NaN); 
    const apiUrl = process.env.REACT_APP_API_URL as string;
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const updateFeedbackMessage = (isError: boolean, message: string) => {
        setIsError(isError);
        setFeedbackMessage(message);
    };

    const handleResponse = async (response: Response) => {
        const data = await response.json();
        updateFeedbackMessage(data.isError, data.feedbackMessage);
    };

    async function sendData() {
        if (jargon === '')
        {
            updateFeedbackMessage(true, 'Enter the "Jargon"');
        }
        else if (translate === '') {
            updateFeedbackMessage(true, 'Enter the "Translate"');
        }
        else
        {
            const response = await fetch(`${apiUrl}/api/home/setJargonDictionary`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jargon: jargon,
                    translate: translate,
                    exampleOfUse: exampleOfUse
                }),
            });

            handleResponse(response);
        }
    };

    async function modifyData() {
        if (isNaN(id)) {
            updateFeedbackMessage(true, 'Enter the "Id"');
        }
        else if (jargon === '') {
            updateFeedbackMessage(true, 'Enter the "Jargon"');
        }
        else if (translate === '') {
            updateFeedbackMessage(true, 'Enter the "Translate"');
        }
        else {
            const response = await fetch(`${apiUrl}/api/home/modifyJargonDictionary`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    jargon: jargon,
                    translate: translate,
                    exampleOfUse: exampleOfUse
                }),
            });

            handleResponse(response);
        }
    };

    async function deleteData() {
        if (isNaN(id)) {
            updateFeedbackMessage(true, 'Enter the "Id"');
        }
        else {
            const response = await fetch(`${apiUrl}/api/home/deleteJargonDictionary`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    jargon: jargon,
                    translate: translate,
                    exampleOfUse: exampleOfUse
                }),
            });

            handleResponse(response);
        }
    };

    const handleAddButtonClick = () => {
        sendData(); 
    };
    const handleModifyButtonClick = () => {
        modifyData(); 
    };
    const handleDeleteButtonClick = () => {
        deleteData(); 
    };

    return (
        <>
            <Box sx={{
                minHeight: '1.72rem'
            }}>
                <Typography sx={{
                    marginTop: '-0.6rem',
                    color: isError ? 'red' : 'green',
                }}
                >
                    { feedbackMessage }
                </Typography>

            </Box>
            <Box
                display='flex'
            >
                <Box alignItems = 'center'
                    marginRight = '0.7rem'

                    sx={{
                        textAlign: 'right',
                        float: 'left'
                    }}
                >
                    <Typography
                        fontSize = '1.3rem'
                        marginBottom = '1.5rem'
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
                        fontSize = '1.3rem'
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
                        sx={{ float: 'left', width: '100%' }}

                >
                    <Box paddingRight = '0.7rem'
                        display = 'flex'
                        paddingBottom = '0.7rem'

                        sx={{
                            float: 'left',
                            width: '62%',
                            '@media screen and (max-width: 600px)': {
                                width: '56%'
                            }
                        }}
                    >
                        <MyInputBase 
                            onChange={(e) => setJargon(e.target.value)}
                            style={{
                                height: '2.3rem',
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
                            fontSize = '1.3rem'
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
                            onChange={(e) => setId(parseInt(e.target.value))}
                            style={{
                                float: 'left',
                                height: '2.3rem',
                            }} 
                        />
                    </Box>
                    <MyInputBase
                        fullWidth
                        onChange={(e) => setTranslate(e.target.value)}
                        style={{
                            height: '2.3rem',
                        }} 
                    />
                </Box>
            </Box>
            <Typography
                fontSize = '1.3rem'
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
                rows={ 4 }
                onChange={(e) => setExampleOfUse(e.target.value)}
                sx={{
                    width: '100%',
                    '@media screen and (max-height: 500px)': {
                        //rows: '2'
                    },
                }}
            />
            <Box paddingTop='0.7rem'
                display="flex"
                justifyContent = 'space-between'
            >

                <MyButton
                    variant="contained"
                    onClick={handleModifyButtonClick}
                    style={{
                        float: 'left',
                        width: '100%',
                        marginRight: '8px',
                        fontSize: '1.2rem',
                        borderColor: 'black'
                    }}
                >
                    Modify
                </MyButton>
                <MyButton
                    variant="contained"
                    onClick={handleAddButtonClick}
                    style={{
                        float: 'left',
                        width: '100%',
                        marginRight: '8px',
                        fontSize: '1.2rem',
                        borderColor: 'black'
                    }}
                >
                    Add
                </MyButton>
                <MyButton
                    variant="contained"
                    onClick={handleDeleteButtonClick}
                    style={{
                        float: 'left',
                        width: '100%',
                        fontSize: '1.2rem',
                        borderColor: 'black'
                    }}
                >
                    Delete
                </MyButton>
            </Box>
        </>
    )
}

export default DictionaryEditorForm;