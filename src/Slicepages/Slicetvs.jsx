import React from 'react'
import { products } from '../data/ProductsData'
import { Link } from 'react-router-dom'

function Slicetvs() {
    const slicetvs = products.slice(60,64)
    return (
        <Link to='/tvs' style={{ textDecoration: 'none' }}>
            <div className='border border-4'>
                <div className='main'>
                    {
                        slicetvs.map((e) => (
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
                <div className='buttonplace'>
                    <button className='btn btn-link'>Click More ...</button>
                </div>
            </div></Link>
    )
}

export default Slicetvs
