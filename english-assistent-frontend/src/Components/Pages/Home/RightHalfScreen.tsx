//MUI Import
import FormControlLabel from '@mui/material/FormControlLabel';
import MyCheckbox from '../../Common/MyCheckBox';

//MyComponents Import
import MyButton from '../../Common/MyButton';
import MyInputBase from '../../Common/MyInputBase'
import DictionaryEditorForm from '../../Pages/Home/DictionaryEditorForm'

const RightHalfScreen: React.FC = () => {
    return (
        <>
            <img src='images/background.png'
                alt="background"
                style={{ width: '100%', }}
            />
            <MyInputBase
                style={{
                    marginTop: '1vh', width: '100%',
                    height: '3rem', fontSize: '1.3rem'
                }}
            />
            <MyButton
                variant="contained"

                style={{
                    width: '100%',
                    marginTop: '1.6vh',
                    fontSize: '1.3rem',
                    height: '3rem',
                    borderBottom: 'none'
                }}
            >
                Translate
            </MyButton>
            <FormControlLabel
                sx={{
                    '.css-1ejercq-MuiTypography-root': { fontSize: '1.5rem', fontWeight: 250 },
                    '.css-i4bv87-MuiSvgIcon-root': { width: '2rem', height: '2rem' },
                    width: '100%'
                }}

                control={
                    <MyCheckbox defaultChecked />}
                label="Translate and save"
            />
            <DictionaryEditorForm/>
        </>
    )
}

export default RightHalfScreen;