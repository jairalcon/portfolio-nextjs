import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
    return (
        <>
            <Head>
                <title>Jair | Resume</title>
                <meta
                    name='description'
                    content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
                />
                <link rel='icon' href='/fav.png' />
            </Head>

            <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
                <h2 className='text-center'>Resume</h2>
                <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center rounded-xl'>
                    <h2 className='text-center'>Jair Alcon</h2>
                    <div className='flex'>
                        <a
                            href='https://www.linkedin.com/in/jairalcon/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
                        </a>
                        <a
                            href='https://github.com/jairalcon'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub size={20} style={{ marginRight: '1rem' }} />
                        </a>
                    </div>
                </div>
                <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
                    <div className='hidden sm:block'>
                        <p>
                            Proven Leadership <span className='px-1'>|</span> Web Development{' '}
                            <span className='px-1'>|</span> Complex Problem Solving
                        </p>
                    </div>
                    <div className='block sm:hidden'>
                        <p>Proven Leadership</p>
                        <p className='py-2'>Web Development</p>
                        <p>Complex Problem Solving</p>
                    </div>
                </div>
                <p>
                    Analytical, innovative, and motivated web development professional
                    with experience in customer service, team leadership, and
                    organizational effectiveness in fast-paced and challenging
                    environments. Diverse analytical skills, team collaboration, and
                    relationship building. Consummate professional, and motivated leader,
                    with solid interpersonal abilities and complex problem-solving skills.
                    Effective and proven track record of critical thinking, idea
                    generation, and optimizing efficiencies.
                </p>

                {/* Skills */}
                <div className='text-center py-4'>
                    <h5 className='text-center underline text-[18px] py-2 text-[#4169E1]'>Skills</h5>
                    <p className='py-2'>
                        <span className='font-bold'>Technical Skills</span>
                        <span className='px-2 inline-block'>|</span>Front-End Web Developer
                        <span className='px-2 inline-block'>|</span>HTML
                        <span className='px-2 inline-block'>|</span>CSS
                        <span className='px-2 inline-block'>|</span>Javascript
                        <span className='px-2 inline-block'>|</span>React
                        <span className='px-2 inline-block'>|</span>Next.js
                        <span className='px-2 inline-block'>|</span>Tailwind
                        <span className='px-2 inline-block'>|</span>RESTAPI
                    </p>
                    <p className='py-2'>
                        <span className='font-bold'>Amazon Web Services</span>
                        <span className='px-2'>|</span>Amazon Web Services Amplify
                    </p>
                </div>

                {/* Education */}
                <h5 className='text-center underline text-[18px] py-4 text-[#4169E1]'>
                    Education
                </h5>
                {/* Promineo Tech */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            PROMINEO TECH
                        </span>
                        <span className='px-2'>|</span>Surprise, AZ (online)
                    </p>
                    <p className='py-1 italic'>Program: Front End Software Development (May 2022 - October 2022)</p>
                    <p className='underline'>Courses:</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Introduction to JavaScript (6 Weeks)
                            <p className='ml-4'>Basic programming in JavaScript (ES6) to advanced Object-Oriented concepts, functional programming, design patterns, and unit testing. Version control with Git.</p>
                        </li>
                        <li>
                            Front End Technologies (6 Weeks)
                            <p className='ml-4'>User interface design including HTML, CSS, Bootstrap, JQuery, and AJAX. Built dynamic, responsive applications using vanilla JavaScript and then JQuery.</p>
                        </li>
                        <li>
                            Web App Design with ReactJS (6 Weeks)
                            <p className='ml-4'>Designed and built dynamic, modular user interfaces using ReactJS. Concepts include everything from basic JSX and components to advanced application development and deploying applications with AWS Elastic Beanstalk.</p>
                        </li>
                    </ul>
                </div>

                {/* Southwestern Adventist University */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            SOUTHWESTERN ADVENTIST UNIVERSITY
                        </span>
                        <span className='px-2'>|</span>Keene, TX
                    </p>
                    <p className='py-1 italic'>Degree: Psychology - Major; Wellness - Minor (2006 - 2010)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Completed most credits towards my degrees but financial reasons didn&rsquo;t allow me to finish.
                        </li>
                        <li>
                            Psychology/Education Club - Chaplain (2007-2009)
                            <p className='ml-4'>I served as chaplain for the club 2 years while at Southwestern and helped plan club events in conjunction with other club officers and club sponsors.</p>
                        </li>
                        <li>
                            Placed 1st in every intramural racquetball tournament from 2006-2010.
                        </li>
                    </ul>
                </div>

                {/* Bentonville High School */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            BENTONVILLE HIGH SCHOOL
                        </span>
                        <span className='px-2'>|</span>Bentonville, AR
                    </p>
                    <p className='py-1 italic'>High School Diploma (August 2002 - May 2005)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            National Spanish Exam
                            <p className='ml-4'>My test score placed me No. 1 in my high school, county, and state.</p>
                        </li>
                    </ul>
                </div>

                {/* Experience */}
                <h5 className='text-center underline text-[18px] py-4 text-[#4169E1]'>
                    Professional Experience
                </h5>

                {/* Shutterfly Lifetouch Inc. */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            SHUTTERFLY LIFETOUCH INC.
                        </span>
                        <span className='px-2'>|</span>Rogers, AR
                    </p>
                    <p className='py-1 italic'>Photography Supervisor (September 2015 - May 2022)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Received promotion to Photography Supervisor.
                        </li>
                        <li>
                            Interview, hire, help on-board, and train new photography team members on a seasonal basis.
                        </li>
                        <li>
                            Supervise, coach, and develop photography team&rsquo;s skills through on-site training in schools and weekly feedback.
                        </li>
                        <li>
                            Responsible for efficient picture day scheduling by ensuring appropriate match of photographer&rsquo;s skills to
                            maximize productivity for key accounts.
                        </li>
                        <li>
                            Ensure the photography team is assigned their equipment sets on a weekly basis by collaborating with
                            Photography Administrator.
                        </li>
                        <li>
                            Collaborate with Photography Manager to ensure commitments are fulfilled when photography member(s) call- in sick.
                        </li>
                        <li>
                            Maintain inventory of expendable photography supplies and other operational responsibilities
                        </li>
                    </ul>
                </div>


                {/* Personal Experience */}
                <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold italic'>
                            Teaching & Mentoring Web Development
                        </span>
                        <span className='px-2'>|</span>Dallas, TX
                    </p>
                    <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            In 2021 I started “Code Commerce”, a YouTube channel focused on
                            sharing what I’m learning in web development, specifically
                            front-end development.
                        </li>
                        <li>
                            Private 1 on 1 Zoom coaching calls related to web development.
                            More specifically debugging, teaching basic web development
                            concepts and code reviews.
                        </li>
                    </ul>
                </div>

                {/* //! PLACEHOLER */}
                {/* <h5 className='text-center underline text-[18px] py-4 text-[#4169E1]'>
                    Other Professional Experience
                </h5> */}

                {/* Experience */}
                {/* <div className='py-6'>
                    <p className='italic'>
                        <span className='font-bold'>CITY OF SHERMAN, TX</span>
                        <span className='px-2'>|</span>Sherman, TX
                    </p>
                    <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Ensured proper implementation of firefighting techniques and
                            practices including controlling and extinguishing fires, operating
                            hose lines, and fire ground operations, ventilation, and search
                            and rescue.
                        </li>
                        <li>
                            Oversaw comprehensive understanding, operation, and maintenance of
                            fire engines, ladder trucks, technical rescue apparatus, and
                            response trailers.
                        </li>
                        <li>
                            Performed ALS techniques as needed within emergency situations
                            including the use of an esophageal or dual lumen airway device and
                            oral intubation using laryngoscopy.
                        </li>
                        <li>
                            Collaborated with a talented and high performing team of
                            firefighters in high pressure and stressful situations as needed.
                        </li>
                        <li>
                            Utilized proven and demonstrated knowledge of multiple
                            certifications including Pediatric Advanced Life Support,
                            Prehospital Trauma Life Support, and Advanced Cardiac Life
                            Support, among others.
                        </li>
                    </ul>
                </div> */}
            </div>
        </>
    );
};

export default resume;