import React from 'react';
import ProjectItem from './ProjectItem';
import f1QuizImg from '../public/assets/projects/f1quiz.jpg'
import portfolioImg from '../public/assets/projects/portfolio.jpg';
import NextPI from './NextPI';

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#4169E1]'>Projects</p>
                <h2 className='py-8'>What I&rsquo;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* //! PLACEHOLDER */}

                    <ProjectItem title='F1 Quiz App' backgroundImg={f1QuizImg} projectUrl='/f1quiz' />
                    <NextPI title='My Portfolio Site' backgroundImg={portfolioImg} projectUrl='/portfolio' />
                </div>
            </div>
        </div>
    )
}

export default Projects