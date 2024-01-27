//MUI Import
import Box from '@mui/material/Box'
import Button from '@mui/material/Box'
import RefreshIcon from '@mui/icons-material/Refresh';

//My components import
import { useHomeContext } from '../Home/HomeContext'
import DictionaryDataGrid from '../Home/DictionaryDataGrid'
import JargonFilter from '../Home/JargonFilter'

const LeftHalfScreen: React.FC = () => {
    //–абота с контекстом домашней страницы
    const { rowsState, fetchJargon } = useHomeContext();
    const [rows, setRows] = rowsState;
    return (
        <>
            <Box
                sx={{
                float: 'left'
            }}>
                <RefreshIcon
                    onClick={() => fetchJargon()}
                    sx={{
                        marginTop: '5.2rem',
                        marginLeft: '1rem',
                        fontSize: '1.85rem',
                        cursor: 'pointer',
                        color: 'primary.main'
                    }}
                />
                </Box>
            <JargonFilter />
            <DictionaryDataGrid />
        </>
    )
}

export default LeftHalfScreen;