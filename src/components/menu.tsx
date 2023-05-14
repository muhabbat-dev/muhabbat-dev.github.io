import React, { useEffect, useState } from 'react'
import {Link} from 'gatsby'
import { CgMenu } from 'react-icons/cg'
import { GrNext } from 'react-icons/gr'
// import BottomNav from './bottom_nav'


const Menu = ({active = 'index'} : any) => {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if(window.innerWidth < 768){
      setMobile(true)
    }
  },[])
  return isMobile ? <MobileMenu active={active} /> :<WebMenu active={active} />
  // return <WebMenu />
}


const WebMenu = ({active} : any) => (<div className="navbar bg-secondary ">
<div className="flex-1">
  <Link to="/" className="btn btn-ghost normal-case text-xl">Portfolio</Link>
</div>
<div className="flex-none">
<ul className="menu menu-horizontal p-0">
  <li><Link to={'/'} className={`${active == 'index' ? 'text-white' : 'text-accent'}`}>Home</Link></li>
  <li><Link to={'/portfolio'} className={`${active == 'portfolio' ? 'text-white' : 'text-accent'}`}>Portfolio</Link></li>
  <li><Link to={'/blogs'} className={`${active == 'blogs' ? 'text-white' : 'text-accent'}`}>Blogs</Link></li>
  </ul>
</div>
</div>)



const MobileMenu = ({active} : any) => (
<div>
<div className="collapse absolute left-0 right-0 z-50 ">
<input type="checkbox" className="peer" /> 
<div className="collapse-title bg-secondary text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
  <div className='flex flex-row justify-between items-center'>
    <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
    <CgMenu className='text-4xl' />
  </div>
</div>
<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content p-0 m-0"> 
<ul className="menu bg-secondary w-full text-lg">
  <li><Link to={'/'} className={`${active == 'index' ? 'text-white' : 'text-secondary'}flex flex-row justify-between`}><div>Home <GrNext/></div></Link></li>
  <li><Link to={'/portfolio'} className={`${active == 'portfolio' ? 'text-white' : 'text-secondary'}flex flex-row justify-between`}><div>Portfolio <GrNext /></div></Link></li>
  <li><Link to={'/blogs'} className={`${active == 'blogs' ? 'text-white' : 'text-secondary'}flex flex-row justify-between`}><div>Blogs <GrNext /></div></Link></li>
</ul>


</div>
</div>
{/* <BottomNav /> */}
</div>
)
export default Menu