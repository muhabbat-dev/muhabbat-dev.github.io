import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Blog from './lib/blog'
const PopularBlogs = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
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

  return (
    <div>
        <h1>Popular Blogs</h1>
        <div className='flex flex-row flex-wrap justify-between'>
        {
            data.allHashNodePost.nodes.map((blog : any, i : number) => <Blog key={i} {...blog} />)
        }
        </div>
    </div>
  )
}

export {PopularBlogs}
