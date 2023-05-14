import React, { useEffect, useState } from 'react'
import { BsCheckLg, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { MdFileDownload, MdWork } from 'react-icons/md'
// import img_profile from './../public/profile.jpg'

const web = { "--value": 90 } as React.CSSProperties
const mobile = { "--value": 85 } as React.CSSProperties
const backend = { "--value": 80 } as React.CSSProperties

const SideBar = ({children} : any) => {

  return (
    <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {children}
        <div className=" absolute bottom-20 right-5 lg:hidden md:hidden z-50">
            <label htmlFor="my-drawer" className="btn btn-secondary drawer-button"><MdWork className='text-yellow-400 text-3xl' /></label>
        </div> 
        </div>
    <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className='flex flex-col h-screen w-80'>
            <div style={{height : '40%'}} className='bg-neutral flex flex-col justify-center items-center'>
                {/* <div> */}
                    <img src="/profile.jpg" alt="Profile Picture" className='rounded-full mt-5 w-20 h-20'/>
                {/* </div> */}
                <h2 className='text-white font-bold'>Mohib</h2>
                <span>Full Stack Developer</span>
                <span>Mobile {'&'} Web</span>
                <span>dev.mohib@gmail.com</span>
                {/* <span className='cursor-pointer'>
                    <a href="https://api.whatsapp.com/send?phone=923035214014" target="__blank">
                        +923035214014
                    </a>
                </span> */}
            </div>
            {/* Overflow content */}
            <div style={{height : '60%'}} className=' bg-secondary overflow-y-auto sidebar-content px-5 pb-10 text-white'>
                <div className='flex flex-col my-2'>
                    <div className='flex flex-row justify-between'>
                        <b>Residence</b> <p>Pakistan</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <b>City</b> <p>Lahore</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <b>Age</b> <p>24</p>
                    </div>
                </div>
                <Line />

                <div>
                    <h1 className='text-xl my-3 text-white'>Skills</h1>
                    <div className='flex flex-row justify-center'>
                        <div className='flex-col-center mx-2'>
                            <div className="radial-progress text-yellow-400" style={web}>9.5</div>
                            <h2 className='mt-4'>Web</h2>
                        </div>
                        <div className='flex-col-center mx-2'>
                            <div className="radial-progress text-yellow-400" style={mobile}>9.5</div>
                            <h2 className='mt-4'>Mobile</h2>
                        </div><div className='flex-col-center mx-2'>
                            <div className="radial-progress text-yellow-400" style={backend}>9.0</div>
                            <h2 className='mt-4'>Backend</h2>
                        </div>
                    </div>
                </div>
                <Line />
                <div className='text-white mb-5'>
                    <h1 className='font-normal text-xl'>Favourite</h1>
                    <CodingBar text="React, Redux, Typescript" percentage={99} />
                    <CodingBar text="MERN Stack" percentage={95} />
                    <CodingBar text="Flutter Firebase" percentage={90} />
                    <CodingBar text="Headless CMS, Strapi, Sanity" percentage={90} />
                    <CodingBar text="Canvas, Threejs, Fabricjs" percentage={90} />
                </div>
                <Line />
                <div className='text-white'>
                    <Experience />
                </div>
                <Line />
                <div className='flex-col-center'>
                    <button className="btn rounded-none px-16 text-sm mb-5">Download CV <MdFileDownload className='ml-1' /></button>
                    <div className='bg-neutral flex-row-center w-full my-5'>
                        <button onClick={() => window.open("https://www.linkedin.com/in/dev-mohib", "__blank")} className='btn rounded-none hover:shadow-2xl hover:shadow-black mx-1'><BsLinkedin /></button>
                        <button onClick={() => window.open("https://www.twitter.com/dev_mohib", "__blank")} className='btn rounded-none hover:shadow-2xl hover:shadow-black mx-1'><BsTwitter /></button>
                        <button onClick={() => window.open("https://www.github.com/dev-mohib", "__blank")} className='btn rounded-none hover:shadow-2xl hover:shadow-black mx-1'><BsGithub /></button>
                    </div>
                </div>
            </div> {/* /Overflow content */}
        </div>
    </div>
</div>
)
}


const CodingBar = ({text = "Javascript", percentage = 85} : any) => (<div>
    <div className='flex flex-row justify-between my-2'>
        <i>{text}</i>
        {/* <p>{(percentage/10)}/10</p> */}
    </div>
    <div className='w-full flex-row-center'>
        <div className='h-0.5 bg-yellow-400' style={{width : `${percentage}%`}}/>
        <div className='h-0.5 bg-gray-900' style={{width : `${100 - percentage}%`}}/>
    </div>
</div>)

const SkillAvatar = () => (<div className='flex flex-col items-center'>
<div className='w-16 h-16 mx-2 rounded-full bg-yellow-400'/>
<p className='my-2'>Skill</p>
</div>)

const Experience = () => {
    const experience = ['Typescript, Reactjs, SvelteKit', 'React Native, Flutter', 'Gatsby, Nextjs, Astro','MERN Stack, JAMStack, Firebase','Python, Nodejs, PHP', 'GraphQL, Restful API, Web Sockets','GCP, AWS, Digital Ocean','Git, CI/CD, Linux','Docker, Nginx, Elastic Stack', 'Tailwindcss,Bootstrap,Material UI', 'HTML Canvas, Threejs, WebXR', 'Webpack, Vitejs, Babel', 'Solidy, Etherjs, HardHat']
    return(
        <div className='text-white'>
            <h1 className='font-extrabold my-2'>Experience</h1>
            {
                experience.map((exp, i) => <div key={i} className='flex flex-row justify-start'> 
                <BsCheckLg className='text-yellow-400 mx-2' />
                <p>{exp}</p>
                </div>)
            }
        </div>
    )
}
const Line = () => <div className='h-0.5 bg-gray-50 mx-5 rounded my-3' />
export default SideBar