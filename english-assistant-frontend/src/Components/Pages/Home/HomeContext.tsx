//React Import
import React, { createContext, useContext, ReactNode, useState } from 'react';
import axios from 'axios';

export interface HomeContextProps {
    jargonState: [string, React.Dispatch<React.SetStateAction<string>>];
    translateState: [string, React.Dispatch<React.SetStateAction<string>>];
    idState: [string, React.Dispatch<React.SetStateAction<string>>];
    exampleOfUseState: [string, React.Dispatch<React.SetStateAction<string>>];
    rowsState: [Row[], React.Dispatch<React.SetStateAction<Row[]>>];
    fetchJargon: () => void;
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

type Row = {
    id: string;
    jargon: string;
    translate: string;
    exampleOfUse: string;
};

export const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
    const [jargon, setJargon] = useState('');
    const [translate, setTranslate] = useState('');
    const [id, setId] = useState('');
    const [exampleOfUse, setExampleOfUse] = useState('');

    const [rows, setRows] = useState<{
        id: string; jargon: string;
        translate: string; exampleOfUse: string;
    }[]>([]);

    const apiUrl = process.env.REACT_APP_API_URL as string;

    const fetchJargon = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/home/getJargonDictionary`);
            setRows(response.data);
        } catch (error) {
            console.error('Error fetching popular products:', error);
        }
    };

    const contextValue: HomeContextProps = {
        jargonState: [jargon, setJargon],
        translateState: [translate, setTranslate],
        idState: [id, setId],
        exampleOfUseState: [exampleOfUse, setExampleOfUse],
        rowsState: [rows, setRows],
        fetchJargon: fetchJargon
    };

    return (
        <HomeContext.Provider value={contextValue}>
            {children}
        </HomeContext.Provider>
    );
}
