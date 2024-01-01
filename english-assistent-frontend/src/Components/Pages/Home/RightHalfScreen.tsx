//MUI Import
import FormControlLabel from '@mui/material/FormControlLabel';
import MyCheckbox from '../../Common/MyCheckBox';

//MyComponents Import
import MyButton from '../../Common/MyButton';
import MyInputBase from '../../Common/MyInputBase'

const RightHalfScreen: React.FC = () => {
    return (
        <>
            <img src='images/background.png'
                alt="background"
                style={{ width: '100%', height: '100%', }}
            />
            <MyInputBase
                style={{
                    marginTop: '1vh', width: '100%',
                    height: '7vh', padding: '1.2vh',
                    fontSize: '2.6vh'
                }}
                sx={{

                } }
            />
            <MyButton
                variant="contained"

                style={{
                    width: '100%',
                    marginTop: '1.6vh',
                    fontSize: '2.5vh',
                    height: '6.5vh',
                    borderBottom: 'none'
                }}
            >
                Translate
            </MyButton>
            <FormControlLabel
                sx={{
                    '.css-1ejercq-MuiTypography-root': { fontSize: '1.5rem', 'font-weight:': 250 },
                    '.css-i4bv87-MuiSvgIcon-root': { width: '2rem', height: '2rem' }
                    
                }}

                control={
                    <MyCheckbox defaultChecked />}
                label="Translate and save" />
        </>
    )
}

export default RightHalfScreen;