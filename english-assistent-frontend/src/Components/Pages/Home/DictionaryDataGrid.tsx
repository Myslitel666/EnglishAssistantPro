import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import axios from 'axios';
//import '../Home/DictionaryDataGrid.css'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 45 },
    {
        field: 'jargon',
        headerName: 'Jargon',
        width: 120,
        editable: true,
        headerClassName: 'custom-header', //Класс заголовка для стилей
        cellClassName: 'custom-cell', //Класс ячеек для стилей
    },
    {
        field: 'translate',
        headerName: 'Translate',
        width: 120,
        editable: true,
    },
    {
        field: 'exampleOfUse',
        headerName: 'Example of use',
        width: 270,
        editable: true,
        flex: 1,

    },
];

const rows = [
    { id: 1, jargon: 'Snow', translate: 'Jon', exampleOfUse: '14' },
];

export default function DictionaryDataGrid() {
    const theme = useTheme();
    const [data, setData] = useState<{
        id: number; jargon: string;
        translate: string; exampleOfUse: string;
    }[]>([]);

    const apiUrl = process.env.REACT_APP_API_URL as string;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/home/jargonDictionary`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ padding: '1.5vh', height:'82.6vh', width: '100%', }}>
            <DataGrid
                rows={data}
                columns={columns}
                getRowHeight={() => 'auto'}    
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