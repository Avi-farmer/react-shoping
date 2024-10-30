import React from 'react'
import { products } from '../data/ProductsData'
import { Link } from 'react-router-dom'

function Slicemobile() {
    const slicemobile = products.slice(0, 4)
    return (
        <Link to='/mobiles' style={{ textDecoration: 'none' }}><div className='border border-4'>
        <div className="main">
          {
            slicemobile.map((e) => (
              <div key={e.id} className='data1'>
                <div className='dataimage'>
                  <img src={e.images} alt={e.brand} />
                </div>
                <div className='bg-dark text-white'>
                  <h6>{e.brand}</h6>
                  <h5>{e.price}/-</h5>
                  <small>{e.description.slice(0, 50)}</small>
                </div>
              </div>
            ))
          }
        </div>
        <div className="buttonplace">
          <button className='btn btn-link'>click more...</button>
        </div>
      </div></Link>
    )
}

export default Slicemobile
