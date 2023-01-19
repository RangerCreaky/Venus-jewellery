import React from 'react';
import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";
import { smallcards } from './utils/smallcards';
import CardSmall from './components/CardSmall';
import Card from './components/Card';
import { featured } from './utils/featured';



const App = () => {
    const renderSmallCards = () => {
        return smallcards.map((card) => {
            return <CardSmall imgsrc={card.src} text={card.text} />
        })
    }

    const renderCards = () => {
        return featured.map((card) => {
            return (
                <Card src={card.src} text={card.text} price={card.price} />
            )
        })
    }

    return (
        <div className='scroll-smooth bg-[#FFFFF4]'>
            <Navbar />
            <Carousel />
            <div className='flex flex-wrap mt-8 justify-center'>
                {renderSmallCards()}
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-center mt-32 text-5xl text-gray-900 font-bold'> Featured Products </h2>
                <hr className='w-32 shadow-2xl bg-[#D2AC47] h-2 text-center mt-3' />
                <p className='text-center mt-4 font-semibold text-lg text-gray-600'> Brand new beads collection </p>
            </div>

            <div className='flex flex-wrap justify-center items-center'>
                {renderCards()}
            </div>
        </div>
    )
}

export default App;