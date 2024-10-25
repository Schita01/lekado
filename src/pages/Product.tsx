import React from 'react'
import Products from '../components/Products'

const Product = () => {
  return (
    <section className='production'> 
   <div className="container">
   <div className="vacancy_top">
            <span className='top-span'>ვაკანსიები</span> 
            </div>
        </div>
        <div className="container">
            <div className="product-container">
                <span className='product-main-span'>პროდუქცია</span>
            </div>
        </div>
        <Products/>

    </section>
  )
}

export default Product
