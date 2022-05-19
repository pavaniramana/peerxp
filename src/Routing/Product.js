import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <>
        <div>Products</div>
        <Link to = '/products/mobile' className ='btn btn-success' >Mobile</Link>.
        <Link to = '/products/laptop' className ='btn btn-danger' >Laptop</Link>.
        <Outlet />
    </>
  )
}

export default Products 