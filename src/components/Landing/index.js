import React, { Fragment, useEffect, useRef, useState } from 'react'

const Landing = () => {

    const [btn, setBtn] = useState(false)

    const refWolverine = useRef(null)
    
    useEffect(() => {
        refWolverine.current.classList.add('startingImg')
        setInterval(() => {
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
        } else if(refWolverine.current.classList.contains('leftImg')) {
            refWolverine.current.classList.remove('rightImg')
        }
    }

    const displayBtn =  btn && (
        <Fragment>
            <div className='leftBox'>
                <button onMouseOver={setLeftImg} onMouseOut={clearImg} className='btn-welcome'>Inscription</button>
            </div>
            <div className='rightBox'>
                <button onMouseOver={setRightImg} onMouseOut={clearImg} className='btn-welcome'>Connexion</button>
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
 