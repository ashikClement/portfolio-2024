import React from 'react';
import Header from './Header.jsx';
import About from './About';
import Logos from './Logos';
import Work from './Work';
import Contact from './Contact';

export const App = () => {
    return (
        <div id='home' className='bg-radial-gray'>
            <Header />
            <About />
            <Logos />
            <Work />
            <Contact />
        </div>
    );
};

export default App;
