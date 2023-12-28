import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {

  const [show, setShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if (window.scrollY>350){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  console.log(show)

  return (
    <div className= {`${show && 'nav-black'} nav-content`}>
        <div >
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        </div>
    </div>
  )
}

export default Nav