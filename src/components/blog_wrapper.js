import React from 'react'
// import Footer from './footer'
import Menu from './menu'

const BlogWrapper = ({title, children}) => {
  return (
    <>
    <Menu />
    <div className='flex flex-row min-h-screen mt-10'>
        {/* Left Side */}
        <div className='w-1/4'></div>
        <div className='w-2/4'>
            <h1 className='font-extrabold text-black text-4xl my-3'>{title}</h1>
                {/* <img src={`${image}`} alt={title} className="w-full" /> */}
                {
                    children
                }
        </div>
        <div className='w-1/4'></div>
    
    </div>

    {/* <Footer /> */}
    </>
    )
}

export default BlogWrapper