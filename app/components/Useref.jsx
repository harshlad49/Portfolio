import React, { useEffect, useRef } from 'react'
const Useref = () => {
  const inputfocus = useRef();

   useEffect(()=>{
      inputfocus.current.focus();
   },[])
  return (
    <div>
      <input type='text' ref={inputfocus} />
      <button>Submit</button>
    </div>
  )
}

export default Useref
