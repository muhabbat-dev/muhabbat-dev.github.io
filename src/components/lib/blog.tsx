import React  from "react"
export const Blog = ({title, description, slug, coverImage, brief} : any) => {
  console.log({brief});
    return(<div onClick={() => {
      window.location.href = '/blog/'+ slug
    }} className="card w-96 bg-base-100 shadow-xl mx-2 my-4 cursor-pointer hover:opacity-50">
    <figure>
    <img height={240} src={coverImage.url} alt={title} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {title}
        {/* <div className="badge badge-secondary">NEW</div> */}
      </h2>
      <p className="h-16">{brief}......</p>
      {/* <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
      </div> */}
    </div>
  </div>)
  }

  export default Blog