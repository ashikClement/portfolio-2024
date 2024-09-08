import React from 'react';

const Proj_md = ({ image, heading, caption, isActive, onClick }) => {
    return (
        <div
            //Change width and grayscale when active 
            className={`relative overflow-hidden mr-1 bg-cover cursor-pointer grayscale transition-all duration-500 ease-in-out ${
                isActive ? 'w-[120rem] grayscale-0' : 'w-[20rem]'
            }`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={onClick}
        >
            <div
                className={`absolute inset-0 transition-opacity duration-300 bg-black bg-opacity-50 p-2 min-w-[40rem] ${
                    //Show text and darken bg when active
                    isActive ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="h-full flex flex-col justify-end text-white">
                    <h1 className="text-xl font-bold">{heading}</h1>
                    <p>{caption}</p>
                </div>
            </div>
        </div>
    );
};

export default Proj_md;
