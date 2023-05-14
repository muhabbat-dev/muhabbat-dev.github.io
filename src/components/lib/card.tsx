import Image from 'next/image'
import React from 'react'

const Blog = ({title, description} : any) => {
    return(<div className="card bg-base-100 shadow-2xl mx-2 my-4 rounded-none">
    <figure>
    <Image src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        {title}
        {/* <div className="badge badge-secondary">NEW</div> */}
      </h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>)
  }

export default Blog