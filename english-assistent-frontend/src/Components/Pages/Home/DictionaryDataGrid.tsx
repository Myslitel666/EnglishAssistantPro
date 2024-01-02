import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import axios from 'axios';

//const [data, setData] = useState([]);

const fetchData = async () => {
    try {
        const response = await axios.get('ВАШ_API_ЭНДПОИНТ'); // Замените на ваш API-эндпоинт
        return response.data; // Предполагаем, что данные приходят в формате массива объектов
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 45 },
    {
        field: 'jargon',
        headerName: 'Jargon',
        width: 150,
        editable: true,
        headerClassName: 'custom-header', //Класс заголовка для стилей
        cellClassName: 'custom-cell', //Класс ячеек для стилей
    },
    {
        field: 'translate',
        headerName: 'Translate',
        width: 150,
        editable: true,
    },
    {
        field: 'exampleOfUse',
        headerName: 'Example of use',
        width: 210,
        editable: true,
    },
];

const rows = [
    { id: 1, jargon: 'Snow', translate: 'Jon', exampleOfUse: '14' },
    { id: 2, jargon: 'Lannister', translate: 'Cersei', exampleOfUse: '31' },
    { id: 3, jargon: 'Lannister', translate: 'Jaime', exampleOfUse: '31' },
    { id: 4, jargon: 'Stark', translate: 'Arya', exampleOfUse: '11' },
    { id: 5, jargon: 'Targaryen', translate: 'Daenerys', exampleOfUse: null },
    { id: 6, jargon: 'Melisandre', translate: null, exampleOfUse: '150' },
    { id: 7, jargon: 'Clifford', translate: 'Ferrara', exampleOfUse: '44' },
    { id: 8, jargon: 'Frances', translate: 'Rossini', exampleOfUse: '36' },
    { id: 9, jargon: 'Roxie', translate: 'Harvey', exampleOfUse: '65' },
    { id: 10, jargon: 'Roxie', translate: 'Harvey', exampleOfUse: '65' },
];

export default function DictionaryDataGrid() {
    const theme = useTheme();

    return (
        <Box sx={{ padding: '1.5vh', height:'82.6vh', width: '100%', }}>
            <DataGrid
                rows={rows}
                columns={columns}
                sx={{
                    "& .custom-header": {
                        color: `${ theme.palette.primary.main }`,
                        transition: 'color 1s ease'
                    },
                    "& .custom-cell": {
                        color: `${theme.palette.primary.main}`,
                        transition: 'color 1s ease'
                    },
                }}
                />
        </Box>
    );
}