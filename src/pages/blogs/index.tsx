import React from 'react'
import {LatestBlogs} from '../../components/latest_blogs'
import { PopularBlogs } from './../../components/popular_blogs'
import SideBar from '../../components/sidebar'
import Menu from '../../components/menu'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Markdown from '../../components/Markdown'
// import Image from 'next/image'
// import { latest } from '../../utils/blog_posts'

const Index = () => {
  
  return (
    <div data-theme="mydark" className=' h-screen'>
      {/* <Head>
        <title>Dev Mohib | Blogs</title>
        <meta name="dev mohib" content="Dev Mohib Portfolio, Blogs, Articles, Web development, Programming, Javascrip, Flutter" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <SideBar>
        <Menu active='blogs' />
        <div className='flex justify-start flex-wrap'>
        {/* {
          latest.map((blog, index) => <Blog key={index} title={blog.title} description={blog.description} slug={blog.slug} />)
        } */}
        <LatestBlog />
        </div>
      </SideBar>

    </div>
  )
}
const LatestBlog = () => {
  const data = useStaticQuery(graphql`
  query SanityLatestBlogs {
    allSanityBlogPost(sort: {order: DESC, fields: _createdAt}) {
      nodes {
        slug {
          current
        }
        title
        _createdAt
        mainImage {
          alt
          asset {
            publicUrl
          }
          caption
        }
      }
    }
  }
  
  `)

  return (
    <div>
      <h1 className='text-3xl font-extrabold'>Latest Blogs</h1>
        <div className='flex flex-row flex-wrap justify-start'>{
          data.allSanityBlogPost.nodes.map((blog : any, i : number) => <Blog key={i} blog={blog} />)
        }</div>
      </div>
  )
}

const Blog = ({blog} : any) => {
    return(<Link to={`/blog/${blog.slug.current}`} className="card w-96 bg-base-100 shadow-xl mx-2 my-4 cursor-pointer hover:opacity-50">
    <figure>
    <img height={240} src={blog.mainImage.asset.publicUrl} alt={blog.mainImage.alt} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {blog.title}
        {/* <div className="badge badge-secondary">NEW</div> */}
      </h2>
    </div>
  </Link>)
  }


export const Head = () => (<>
<title>Dev Mohib | Blogs</title>
<meta name="blogs" content="Dev Mohib Portfolio, Blogs, Articles, Web development, Programming, Javascrip, Flutter" />
<link rel="icon" href="/favicon.ico" /></>)

export default Index