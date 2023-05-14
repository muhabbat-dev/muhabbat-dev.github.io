import React, { useEffect, useState } from 'react'
import SideBar from './../../components/sidebar'
import Menu from '../../components/menu'
import { graphql, HeadFC, Link } from 'gatsby'
import Body from './../../components/body'
const Home = ({data} : any) => {
  const grids = [{row : 1, col : 1},{row : 2, col : 2},{row : 1, col : 2},{row : 2, col : 1}]
  React.useEffect(() => {
    console.log(data)
  },[])
  return (
    <div data-theme="mydark" className=' h-screen'>
      <SideBar>
        <Menu active='portfolio' />
        <Hero />
        <div className='flex md:flex-row justify-start sm:flex-col flex-wrap px-10 py-5'>
          {
            data?.allSanitySampleProject.nodes?.map((project : any) => <Card key={project.slug.current} project={project} />)
          }
        </div>
      </SideBar>
    </div>
  )
}

const Hero = () => {
  return(
    <div className='px-16 py-10 h-72'>
      <p className='text-3xl font-extrabold text-white'>The time I've been working as a developer. I've completed the following projects</p>
    </div>
  )
}

const Card = ({project} : any) => {
  const { excerpt, title, mainImage, bgColor, slug } = project
  
  useEffect(() => {
    console.log(slug.current)

  },[])  
  return(
    <div className={`md:w-1/3 sm:w-full  my-3 px-2`}>
      <div className={`rounded-xl  w-full pb-2  flex flex-col justify-between shadow-2xl cursor-pointer`} style={{backgroundColor : bgColor}}>
        <img className='rounded-t-xl bg-cover w-full' src={mainImage.asset.publicUrl} style={{height :260}}  />
        <div className='h-2/4 px-2 text-white'>
          <h1 className='text-2xl font-extrabold'>{title}</h1>
          <span className='mt-2'>{excerpt[0]?.children[0]?.text.slice(0, 100)??'Empty Description'}....</span>
        </div>
        <div className='h-1/4 self-end mx-3'>
          <Link to={`${slug.current}`} className='text-primary hover:opacity-70'>View Details</Link>
        </div>
      </div>
    </div>
  )
}
export const Head: HeadFC = () => {
  return(
  <>
    <title>Dev Mohib | Portfolio</title>
    <meta title="Dev Mohib" content="Dev Mohib, Portfolio, Programming, Coding, Developer, Full stack Developer" />
  </>)
  }
  export const query = graphql`
  query allSanityProjects{
    allSanitySampleProject {
      nodes {
        title
        bgColor
        slug {
          current
        }
        projectUrl
        mainImage {
          asset {
            publicUrl
          }
        }
        excerpt {
          children {
            text
          }
        }
      }
    }
  }  
  `
export default Home
