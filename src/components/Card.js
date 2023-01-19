import React from 'react';

const Card = ({ src, text, price }) => {
    return (
        <section className="shadow-2xl border-2 border-[#D2AC47] text-gray-600 body-font rounded-lg mt-8 mx-8 mb-16">
            <div className="container px-5 pb-8 pt-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="">
                        <a href="/" className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="transition duration-200 ease-in hover:scale-125 object-cover object-center w-56 h-56 block" src={`${src}`} />
                        </a>
                        <div className="mt-4 border-t-2 border-[#D2AC47] ">
                            <h3 className="text-center text-gray-500 text-xs tracking-widest title-font mb-1 mt-4">BEADS</h3>
                            <h2 className="mt-2 text-center text-gray-900 title-font text-lg font-medium">{`${text}`}</h2>
                            <p className="text-center mt-1"> &#x20B9; {`${price}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card;