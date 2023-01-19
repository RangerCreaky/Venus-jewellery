import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className='scroll-smooth'>
        <Navbar />
        <Carousel />
        </div>
    )
}

export default App;