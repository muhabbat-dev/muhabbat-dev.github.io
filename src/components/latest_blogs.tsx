import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Blog from './lib/blog'
const LatestBlogs = () => {
  const data = useStaticQuery(graphql`
  query MyQuery2 {
    allHashNodePost(filter: {}, limit: 10, sort: {fields: dateAdded, order: DESC}) {
      nodes {
        title
        slug
        dateAdded
        brief
        coverImage {
          url
        }
      }
    }
  }
  `)

  console.log({data});
  return (
    <div>
      <h1 className='text-3xl font-extrabold'>Latest Blogs</h1>
        <div className='flex flex-row flex-wrap justify-between'>{
          data.allHashNodePost.nodes.map((blog : any, i : number) => <Blog key={i} {...blog} />)
        }</div>
      </div>
  )
}

export {LatestBlogs}
