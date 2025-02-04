import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
