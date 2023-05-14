import { graphql } from "gatsby";
import React from "react";
import Footer from "../components/footer";
import Markdown from "../components/Markdown";
import Menu from "../components/menu";
import Blog from './blog'
const BlogPost = ({data}) => {
    console.log(data)
    const { title, body, excerpt, mainImage,  } = data.sanityBlogPost
    return(
        <div data-theme="mydark" className='bg-accent w-screen'>
              <Menu />
              {/* <div className="flex flex-row w-full items-center">
                <div className="w-40 h-20 bg-red-400">.</div>
                    <Blog />
                <div className="h-20 bg-red-400  w-40">
                    .
                </div>
              </div> */}
        <div  className='blog-body flex flex-row sm:flex-col' style={{paddingTop : "80px"}}>
          <div className="right md:w-2/12 sm:w-full min-h-16 w-full bg-red-400">
            .
          </div>
          <div className="content pb-10 md:w-8/12 sm:w-full">
            <Blog />
          </div>
          <div className="left md:w-2/12  sm:w-full min-h-16 w-full bg-red-400 flex justify-end">
             .
          </div>
        </div>
        <Footer />
        </div>
    )
}



export default BlogPost

export const query = graphql`
query SanityBlogBySlug($slug : String) {
    sanityBlogPost(
      slug: {current: {eq: $slug}}
    ) {
        title
        authors {
          author {
            name
            image {
              caption
              alt
              asset {
                publicUrl
              }
            }
          }
        }
        body {
          children {
            text
            _type
          }
          style
        }
        excerpt {
          style
          children {
            text
            _type
          }
        }
        mainImage {
          caption
          asset {
            publicUrl
          }
          alt
        }
      }
    }
`