import React from 'react';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
    return (
        <div className='scroll-smooth'>
        <Navbar />
        <Carousel />
        <Footer />
        </div>
    )
}

export default App;