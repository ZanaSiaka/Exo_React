import React from 'react'
import batman from '../../images/batman.png'

const ErrorPage = () => {

  const centerH2 = {
    textAlign: 'center',
    marginTop: '50px'
  }

  const centerImg = {
    display: 'block',
    margin: '40px auto',
    width: '600px'
  }

  return (
    <div className='quiz-bg'>
      <div className='container'>
        <h2 style={centerH2}>Oups, cette page n'existe pas</h2>
        <img style={centerImg} src={batman} alt='Error page' />
      </div>
    </div>
  )
}

export default ErrorPage
