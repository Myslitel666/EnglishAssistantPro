//React Import
import React, { createContext, useContext, ReactNode, useState } from 'react';

export interface HomeContextProps {
    jargonState: [string, React.Dispatch<React.SetStateAction<string>>];
    translateState: [string, React.Dispatch<React.SetStateAction<string>>];
    idState: [string, React.Dispatch<React.SetStateAction<string>>];
    exampleOfUseState: [string, React.Dispatch<React.SetStateAction<string>>];
}


const HomeContext = createContext<HomeContextProps | undefined>(undefined);

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error('useDictionaryEditor must be used within a DictionaryEditorProvider');
    }
    return context;
};

interface HomeProviderProps {
    children: ReactNode;
}

export const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
    const [jargon, setJargon] = useState('');
    const [translate, setTranslate] = useState('');
    const [id, setId] = useState('');
    const [exampleOfUse, setExampleOfUse] = useState('');

    const contextValue: HomeContextProps = {
        jargonState: [jargon, setJargon],
        translateState: [translate, setTranslate],
        idState: [id, setId],
        exampleOfUseState: [exampleOfUse, setExampleOfUse],
    };

    return (
        <HomeContext.Provider value={contextValue}>
            {children}
        </HomeContext.Provider>
    );
}
