import * as React from "react"
import "../styles/global.css"
import "../styles/style.css"
import type { HeadFC } from "gatsby"
import SideBar from '../components/sidebar'
import Menu from '../components/menu'
import Hero from '../components/hero'
import Body from '../components/body'
import ReviewGallery from "../components/ReviewGallery"
import StoryListView from "../components/StoryListView"
import StoryScreen from '../pages/web-story'
import { graphql } from "gatsby"
const Home = ({data} : any) => {
  return (
    <div data-theme="mydark" className=' h-screen'>
      <SideBar>
        <Menu />
        <Hero />
        <StoryListView stories={data.allSanityWebStory.nodes} /> 
        <ReviewGallery />
        <Body projects={data.allSanitySampleProject.nodes} />
      </SideBar>
    </div>
  )
}

export default Home

export const Head: HeadFC = () => {
return(
<>
<title>Dev Mohib</title>
<meta title="Dev Mohib" content="Dev Mohib, Portfolio, Programming, Coding, Developer, Full stack Developer" />
</>)
}


export const query = graphql`
query FilteredProjectsQuery {
  allSanitySampleProject(
    filter: {_id: {nin: ["c5ced3f8-3717-408b-a364-c6df89dab610", "fc2f516f-86cb-41d4-bb3d-2435c6c23e9f"]}}
  ) {
    nodes {
      title
      _id
      projectUrl
      slug {
        current
      }
      excerpt {
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
      }
    }
  }
  allSanityWebStory {
    nodes {
      slug {
        current
      }
      storyCover {
        asset {
          publicUrl
        }
      }
    }
  }
}
`
