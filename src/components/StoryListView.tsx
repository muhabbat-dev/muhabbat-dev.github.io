import { Link } from 'gatsby'
import React, { useState } from 'react'

const StoryListView = ({stories} : {stories : any[]}) => {
    console.log({stories})
return(
    <>
    <div className='font-mono font-bold text-2xl my-10 '>Top Stories</div>
    <div className='py-0.5 overflow-auto overflow-x-scroll overflow-y-hidden  whitespace-nowrap'>
        {
            stories.map((story : any) => <Link  to={`web-story/${story.slug.current}`} key={story.slug.current}>
                <div className='shadow-lg inline-block shadow-black w-28 h-28 mx-1 rounded-full bg-blue-600  text-white active:opacity-70'>
                    <img src={story.storyCover.asset.publicUrl} className='rounded-full w-28 h-28' />
                </div>
            </Link>  
            )
        }
    </div>
    </>
    )
}

export default StoryListView