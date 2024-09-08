import React from 'react';

const About = () => {
    return (
        <section className='h-auto flex justify-center items-center p-6 md:p-8 lg:p-12 xl:p-16 gap-10 '>
            <div className="md:w-[40rem]">

                {/* Image on top for smaller screens */}
                <img
                    src="src/assets/profile.jpeg"
                    alt="Ashik"
                    className="object-cover rounded-full w-full md:hidden mb-10"
                />
                <div className='text-gray-400'>
                    <p>Hi! I am <span className='text-emerald-500 font-bold'>Ashik</span>, and I am a</p>

                    {/* Spin animation */}
                    <div className='w-max h-28 md:h-36 lg:h-48 xl:h-64 overflow-hidden mb-10 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-emerald-500'>
                        <span className="skills">CREATIVE<br></br>CODER</span>
                        <span className="skills">GRAPHIC<br></br>DESIGNER</span>
                        <span className="skills">VISUAL<br></br>ARTIST</span>
                        <span className="skills">CREATIVE<br></br>CODER</span>
                    </div>
                    <p>Art kid turned computer nerd, I believe there are no bounds to creativity in technology. I aspire to give shape to innovative ideas and turn them into working systems through software. Always open to new experiences, seen through my love for cycling and trekking, I carry this drive onto my work by always exploring and experimenting.</p>
                </div>
            </div>

            {/* Image on right for larger screens */}
            <img
                src="src/assets/profile.jpeg"
                alt="Ashik"
                className="object-cover rounded-full w-1/3 hidden md:block"
            />
        </section>
    );
};

export default About;
