﻿import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

//My components import
import { useHomeContext } from '../Home/HomeContext'
import '../Home/DictionaryDataGrid.css'

const columnsDesktop: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 45 },
    {
        field: 'jargon',
        headerName: 'Jargon',
        width: 150,
        //editable: true,
        headerClassName: 'custom-header', //Класс заголовка для стилей
        cellClassName: 'custom-cell wrap-cell', //Класс ячеек для стилей
    },
    {
        field: 'translate',
        headerName: 'Translate',
        width: 150,
        //editable: true,
        cellClassName: 'wrap-cell',
    },
    {
        field: 'exampleOfUse',
        headerName: 'Example of use',
        width: 250,
        //editable: true,
        flex: 1,
        cellClassName: 'wrap-cell example-of-use',
    },
];

const columnsMobile: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 45 },
    {
        field: 'jargon',
        headerName: 'Jargon',
        width: 125,
        headerClassName: 'custom-header', //Класс заголовка для стилей
        cellClassName: 'custom-cell', //Класс ячеек для стилей
    },
    {
        field: 'translate',
        headerName: 'Translate',
        width: 145,
        cellClassName: 'wrap-cell',
    },
    {
        field: 'exampleOfUse',
        headerName: 'Example of use',
        width: 270,
        cellClassName: 'wrap-cell',
    },
];

export default function DictionaryDataGrid() {
    //Работа с контекстом домашней страницы
    const { jargonState, translateState, idState, exampleOfUseState } = useHomeContext();
    const [jargon, setJargon] = jargonState;
    const [translate, setTranslate] = translateState;
    const [id, setId] = idState;
    const [exampleOfUse, setExampleOfUse] = exampleOfUseState;

    const theme = useTheme();
    const [rows, setRows] = useState<{
        id: string; jargon: string;
        translate: string; exampleOfUse: string;
    }[]>([]);

    const isDesktop = useMediaQuery({ minWidth: 600 });
    const columns = isDesktop ? columnsDesktop : columnsMobile;

    const apiUrl = process.env.REACT_APP_API_URL as string;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/home/getJargonDictionary`);
                setRows(response.data);
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{
            padding: '1rem',
            marginTop: '0.3rem',
            height: '38.5rem',
            width: '100%',
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                rowHeight={90}
                onRowSelectionModelChange={(newSelectionModel) => {
                    if (newSelectionModel.length > 0) {
                        const selectedRow = rows.find(row => row.id === newSelectionModel[0]);
                        if (selectedRow) {
                            setJargon(selectedRow.jargon);
                            setTranslate(selectedRow.translate);
                            setId(selectedRow.id);
                            setExampleOfUse(selectedRow.exampleOfUse);
                        }
                    }
                }}
                sx={{
                    '@media screen and (max-width: 1400px)': {
                        height: '35.5rem',
                    },
                    '@media screen and (max-width: 1200px)': {
                        height: '35rem',
                    },
                    '@media screen and (max-width: 1000px)': {
                        height: '36.2rem',
                    },
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