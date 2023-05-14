import React from "react";
import { graphql } from 'gatsby'
import SideBar from '../components/sidebar'
import Menu from '../components/menu'
const SanityProject = ({data}) => {

    React.useEffect(() => {
        console.log(data)
    },[])
    return (
        <div data-theme="mydark" className=' h-screen'>
        <SideBar>
          <Menu active='portfolio' />
          <div className='flex md:flex-row justify-start sm:flex-col flex-wrap px-10 py-5'>
           Project
          </div>
        </SideBar>
      </div>
    )
}

export const query = graphql`
query SanitySampleProject ($slug: String){
    sanitySampleProject(slug: {current: {eq: $slug}}) {
      projectUrl
      title
      slug {
        current
      }
    }
  }
`

export default SanityProject