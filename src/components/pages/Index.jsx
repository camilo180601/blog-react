import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className='jumbo'>
      <h1>Blog React con MERN Stack</h1>
      <p>Blog desarrollado con MERN Stack (Mongo, Express, React y NodeJS)</p>
      <Link to="/articles" className='button'>Ver los Articulos</Link>
    </div>
  )
}

export default Index