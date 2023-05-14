import React from 'react'
import { graphql } from 'gatsby'
import "../styles/global.css"
import ReactMarkdown from 'react-markdown'
import Menu from '../components/menu'
import Footer from '../components/footer'

const BlogPost = ({data}) => {
  const blogData = data.allHashNodePost.nodes[0]

  const { title, dateAdded, brief, contentMarkdown } = blogData
  
  return (
    <div data-theme="mydark" className='bg-accent w-screen' >
        <Menu />
        
        <div  className='blog-body flex md:flex-row sm:flex-col' style={{paddingTop : "80px"}}>
          <div className=" right md:w-1/4 sm:w-full min-h-16 w-full bg-red-400">
            <h1>Right</h1>
          </div>
          <div className="content pb-10 md:w-1/2 sm:w-full">
            <h1 className='font-extrabold text-6xl my-5'>
              {title}
            </h1>
            <ReactMarkdown
            className='w-full'
            components={{
              h1 : ({node, ...props}) => (<h1 style={{color : 'green'}} {...props}></h1>),
              h2 : ({node, ...props}) => (<h1 style={{color : 'green'}} {...props}></h1>),
              h3 : ({node, ...props}) => (<h1 style={{color : 'green', fontSize : 20, fontWeight : 'bolder'}} {...props}></h1>),
              b : ({node, ...props}) => (<b style={{color : 'red'}} {...props}></b>),
            }}
            >
              {contentMarkdown}
            </ReactMarkdown>
          </div>
          <div className="left md:w-1/4 sm:w-full min-h-16 w-full bg-red-400">
            <h1>Left</h1>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export const query = graphql`
query MyBlogQuery ($slug: String){
  allHashNodePost(
    filter: {slug: {eq: $slug}}
  ) {
    nodes {
      title
      slug
      dateAdded
      brief
      contentMarkdown
    }
  }
}
`


export const Head = ({data}) => {
  const blogData = data.allHashNodePost.nodes[0]
  return(
  <>
  <title>Blog | {blogData.title}</title>
  <meta title="Dev Mohib" content="Dev Mohib, Portfolio, Programming, Coding, Full stack Developer" />
  <meta title='Blog' content={blogData.title} />
  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  </>)
  }

export default BlogPost