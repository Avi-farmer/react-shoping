import React from 'react'
import { products } from '../data/ProductsData'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Tvs() {
    const tvs = products.slice(60,80)
  return (
    <>
    <Header/>
    <div className='data'>
        {
            tvs.map(e => (
                <Link to={`/tvs/${e.id}`} key={e.id} style={{ textDecoration: 'none' }}>
                    <div className='data1'>
                        <div className='dataimage'>
                            <img src={e.images} alt={e.brand} />
                        </div>
                        <div className='bg-dark text-white'>
                            <h6>{e.brand}</h6>
                            <h5>{e.price}/-</h5>
                            <small>{e.description.slice(0, 50)}</small>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
    </>
  )
}

export default Tvs
