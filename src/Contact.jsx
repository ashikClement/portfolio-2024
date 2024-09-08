import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            <div className="bg-emerald-500 p-6">
                <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">HIRE ME.</h2>
                <div className='py-10 md:py-20 flex grid gap-6 md:grid-cols-3 md:gap-0 border-b border-black'>
                    <div>
                        <p className='font-bold'>EMAIL</p>
                        <a href="mailto:ashikarul.clement@gmail.com" className="hover:text-white">ashikarul.clement@gmail.com</a>
                    </div>
                    <div>
                        <p className='font-bold'>SOCIALS</p>
                        <div className='socials flex gap-6'>
                            <a href='https://www.instagram.com/ashik_clement' target='_blank'><img src='assets/instagram.svg'></img></a> 
                            <a href='https://www.linkedin.com/in/ashik-arul-clement-4383412a0' target='_blank'><img src='assets/linkedin.svg'></img></a> 
                            <a href='https://www.behance.net/ashikclement' target='_blank'><img src='assets/behance.svg'></img></a> 
                            <a href='https://github.com/ashikClement' target='_blank'><img src='assets/github.svg'></img></a> 
                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>LOCATION</p>
                        <p>Bengaluru, India</p>
                    </div>
                </div>
                <div className='text-center'>
                    <p className='mt-6'>Website by Ashik</p>
                </div>
            </div>

        </section>
    );
};

export default Contact;
