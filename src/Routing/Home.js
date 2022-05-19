import React,{Link} from 'react'

const Home = () => {
  return (
    <div>
        <Link to='/home'>Home</Link>
        <Link to='/tags'>Tags</Link>
        <Link to='/authors'>Authors</Link>
        <Link to='/post'>Post</Link>
        <Link to='/pages'>Pages</Link>
    </div>
  )
}

export default Home