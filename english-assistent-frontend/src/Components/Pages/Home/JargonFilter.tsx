import * as React from 'react';
import Box from '@mui/material/Box';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, useTheme, ThemeProvider, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button'

//MyComponents Import
import MyButton from '../../Common/MyButton'

const JargonFilter: React.FC = () => {

    return (
        <>
            <Box marginTop='10vh' paddingTop='0.5vh'
                paddingLeft='1.5vh' paddingRight='1.5vh'
                alignItems='justify-end' display='flex'
                justifyContent='flex-end'
            >
                <Stack spacing={5} marginRight='1vh'
                    width = '100%'
                    sx={{ float: 'left' }}
                >
                    <MovieSelect />
                </Stack>
                <MyButton
                    //variant="contained"
                    color="primary"

                    style={{ marginTop: 'auto', fontSize: '2.5vh', width: '15vh', height: '4.5vh'}}
                >
                    Filter
                </MyButton>
            </Box>
        </>
    )
}

function MovieSelect() {

    return (
        <Autocomplete
            options={top100Films}
            getOptionLabel={(option: FilmOptionType) => `${option.title} (${option.year})`}
            id="movie-customized-option-demo"
            disableCloseOnSelect
            renderInput={(params) => (
                <TextField {...params} label="Choose a movie" variant="standard"
                    className="jargonFilter"
                />

            )}
            />
    );
}

interface FilmOptionType {
    title: string;
    year: number;
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    }
];

export default JargonFilter;