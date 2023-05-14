import React from 'react'
import Markdown from './Markdown'

const Body = ({projects = []}) => {
  return (
    <div className='flex flex-row justify-start flex-wrap'>
      <h1 className='font-mono font-bold text-3xl my-10'>Some of my Best Work</h1>
      {
        projects.map((project  : any) => <Hero key={project._id} project={project} />)
      }
    </div>
  )
}

const Hero = ({project} : any) => {
  
  return (
   <div className="hero" style={{backgroundImage: `url(${project.mainImage?.asset.publicUrl??''})`, height : '800px', opacity : 10}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content w-full lg:pl-12">
        <div className="w-full text-left">
          <h1 className="mb-5 text-5xl font-bold text-white font-sans">{project.title}</h1>
          {
            project?.excerpt?.map((excerpt : any, i : number) => <div key={i}>{
            excerpt.children.map((data : any, _i : number )=> <Markdown key={_i}  text={data.text} type={data._type} />)
            }</div>)
          }
          <div className='flex justify-start'>
              <a className='text-primary font-extrabold hover:underline cursor-pointer' href={`/portfolio/${project.slug.current}`}>View Details</a>
              <a className='text-primary font-extrabold hover:underline cursor-pointer ml-5' target='__blank' href={project.projectUrl ?? '/'}>See Live</a>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Body