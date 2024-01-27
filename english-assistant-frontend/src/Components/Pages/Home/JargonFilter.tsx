import * as React from 'react';
import Box from '@mui/material/Box';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button'

//MyComponents Import
import MyButton from '../../Common/MyButton'

const JargonFilter: React.FC = () => {

    return (
        <>
            <Box marginTop='4.2rem' paddingLeft='0.5rem'
                paddingRight='1.5vh' alignItems='justify-end'
                display='flex' justifyContent='flex-end'
            >
                <Stack spacing={5} marginRight='1vh'
                    width = '100%'
                    sx={{ float: 'left' }}
                >
                    <MovieSelect />
                </Stack>
                <Button
                    color="primary"
                    style={{ marginTop: 'auto', fontSize: '1.5rem', width: '8rem', height: '2.5rem' }}
                    sx={{ transition: 'background-color 1s ease, color 1s ease, border-color 1s ease' }}
                >
                    Filter
                </Button>
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
                <TextField {...params} label="Choose a movie" variant="standard"/>
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