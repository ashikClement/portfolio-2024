import React from 'react';

const Proj_md = ({ image, heading, caption, link, isActive, onClick }) => {
    return (
        <div
            className={`relative overflow-hidden mr-1 bg-cover cursor-pointer grayscale transition-all duration-500 ease-in-out ${
                isActive ? 'w-[120rem] grayscale-0' : 'w-[20rem]'
            }`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={onClick}
        >
            {/* Background darkening */}
            <div
                className={`absolute inset-0 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                }`}
            ></div>

            {/* Text content with Y-axis movement and opacity change */}
            <div
                className={`absolute inset-0 p-2 transition-transform duration-500 ease-out transition-opacity delay-100 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
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
