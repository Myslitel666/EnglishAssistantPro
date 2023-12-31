//MyComponents Import
import DictionaryDataGrid from '../Home/DictionaryDataGrid'
import JargonFilter from '../Home/JargonFilter'

const LeftHalfScreen: React.FC = () => {
    return (
        <>
            <JargonFilter/>
            <DictionaryDataGrid/>
        </>
    )
}

export default LeftHalfScreen;