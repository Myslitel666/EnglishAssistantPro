import React from 'react';

//MyComponents Import
import Header from '../../Common/Header/Header';
import Content from '../Home/Content';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Content/>
        </div>
    );
};

export default Home;