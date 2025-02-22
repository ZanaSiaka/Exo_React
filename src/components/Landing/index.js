import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

    const [btn, setBtn] = useState(false)

    const refWolverine = useRef(null)
    
    useEffect(() => {
        refWolverine.current.classList.add('startingImg')
        setTimeout(() => {
            refWolverine.current.classList.remove('startingImg')
            setBtn(true)
        }, 800)
    }, [])

    const setLeftImg = () => {
        refWolverine.current.classList.add('leftImg')
    }


    const setRightImg = () => {
        refWolverine.current.classList.add('rightImg')
    }

    const clearImg = () => {
        if (refWolverine.current.classList.contains('leftImg')) {
            refWolverine.current.classList.remove('leftImg')
        } else if(refWolverine.current.classList.contains('rightImg')) {
            refWolverine.current.classList.remove('rightImg')
        }
    }

    const displayBtn =  btn && (
        <Fragment>
            <div className='leftBox'>
                <Link to='/signup' onMouseOver={setLeftImg} onMouseOut={clearImg} className='btn-welcome'>Inscription</Link>
            </div>
            <div className='rightBox'>
                <Link to='login' onMouseOver={setRightImg} onMouseOut={clearImg} className='btn-welcome'>Connexion</Link>
            </div>
        </Fragment>
    )

  return (
    <main ref={refWolverine} className='welcomePage'>
        {displayBtn}
    </main>
  )
}

export default Landing
 