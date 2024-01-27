import React from 'react';

//MyComponents Import
import Header from '../../Common/Header/Header';
import Content from '../Home/Content';
import { HomeProvider } from '../Home/HomeContext'

const Home: React.FC = () => {
    return (

        <HomeProvider>
            <Header />
            <Content/>
        </HomeProvider>
    );
};

export default Home;