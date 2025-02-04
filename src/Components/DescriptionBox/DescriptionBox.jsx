import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
           An e-commerse website is an online platform that facilitates the buying and selling of products or services over the internet.It serves as a virtual marketplace where bussiness and individuals can showcase their products, interact with customers, and consuct transactions without a need for the physical presence. E-commerse websites have gained immence popularity due to their convenience, accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with detailed descriptions,images,prices and any available variations(eg.sizes,colors).Each product has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}
