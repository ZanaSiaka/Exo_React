import React, { useEffect, useRef} from 'react'
import '../css/Exo.css'

function Exo2() {
    
    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })


  return (
    <div>
        <input type='text' placeholder='Entrez votre nom ici'
        ref={inputRef}/>
        <input type='mail' placeholder='Entrez votre mail ici' />
        <input type='tel' placeholder='Entrez votre num"ro ici' />
        <input type='password' placeholder='Entrez votre mot de passe ici' />

        <button type='submit'> Cliquez ici </button>
    </div>
  )
}


export default Exo2
