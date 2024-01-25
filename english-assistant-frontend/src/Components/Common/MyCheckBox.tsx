//MUI Import
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

interface MyCheckboxProps extends CheckboxProps {
    // �������������� ��������, ���� ����������
}

const MyCheckbox: React.FC<MyCheckboxProps> = (props) => {
    return (
        <Checkbox
            {...props}
            sx={{
                transition: 'background-color 1s ease, color 1s ease, border-color 1s ease'
                //...props.sx // ��������� ��� ���������� ������ ����� ����� props
            }}
        />
    );
};

export default MyCheckbox;
