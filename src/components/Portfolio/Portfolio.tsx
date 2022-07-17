import React from 'react'
import { Link } from 'react-router-dom'


const Portfolio = () => {
  return (
    <div className='portfolio-container'>
        <div className='landing-container'>
            <h1>Website Under Construction</h1>
            <Link to='/reviews'><h2 className='reviews-link'>Go to Reviews</h2></Link>
        </div>
    </div>
  )
}

export default Portfolio