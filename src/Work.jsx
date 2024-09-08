import React, { useState } from 'react';
import Proj_md from './Proj_md.jsx';
import Proj_sm from './Proj_sm.jsx';

const Work = () => {
    // State to keep track of the active project within the project gallery, first project is initially open (index 0)
    const [activeProject, setActiveProject] = useState(0);
    // State for smaller screens
    const [activeProjectSm, setActiveProjectSm] = useState(0); 

    const projects = [
        {
            image: 'src/assets/dalit.jpg',
            heading: 'Scrollytelling website',
            caption: 'Healthcare disparities between the general population and dalits'
        },
        {
            image: 'src/assets/greta.jpg',
            heading: 'GretAI',
            caption: 'AI driven educational website'
        },
        {
            image: 'src/assets/toda.jpg',
            heading: 'Stitch your story',
            caption: 'Mobile app that supports the embroidery culture of Toda tribe'
        },
        {
            image: 'src/assets/icecapade.jpeg',
            heading: 'Icecapade',
            caption: 'Board game design'
        },
        {
            image: 'src/assets/blr.png',
            heading: 'Bangalore- A Human-Made Terrarium',
            caption: 'Short film about the city of Bengaluru during the 22nd century'
        },
        {
            image: 'src/assets/restaurant.jpg',
            heading: 'Japanese restaurant',
            caption: '3D Modelling on Maya'
        },
        {
            image: 'src/assets/kamala.png',
            heading: 'Kamala Sohonie',
            caption: 'An animation about the first Indian woman to receive a PhD in a scientific discipline'
        },
        {
            image: 'src/assets/tiger.png',
            heading: 'Tiger',
            caption: 'Anamorphic art using newspapers'
        }
    ];

    return (
        <section id="work" className='h-auto py-20 md:py-40'>

            <div className='flex justify-between px-6 text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-emerald-500 font-bold'>                 
                <h1>PROJECTS</h1>                 
                <h1 className='hidden md:block'>{activeProject + 1 < 10 ? '0' : ''}{activeProject + 1}</h1>
            </div>

            {/* Project gallery for larger screens */}
            <div className='w-full px-6 hidden md:block'> 
                <div className='h-96 flex flex-nowrap'>
                    {projects.map((project, index) => (
                        <Proj_md
                            key={index}
                            image={project.image}
                            heading={project.heading}
                            caption={project.caption}

                             // Set project as active on click
                            onClick={() => setActiveProject(index)}

                             // Check active state
                            isActive={activeProject === index}
                        />
                    ))}
                </div>
            </div>

            {/* Project gallery for smaller screens */}
            <div className='w-full flex-col flex-nowrap px-6 md:hidden'>
                {projects.map((project, index) => (
                    <Proj_sm
                        key={index}
                        image={project.image}
                        heading={project.heading}
                        caption={project.caption}

                         // Set project as active on touch
                        onClick={() => setActiveProjectSm(index)}

                        // Check active state
                        isActive={activeProjectSm === index} 
                    />
                ))}
            </div>

        </section>
    );
};

export default Work;
