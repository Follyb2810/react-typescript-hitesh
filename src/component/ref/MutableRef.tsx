import React, { useEffect, useRef, useState } from 'react'

const MutableRef = () => {
    const [timer,setTimer]= useState(0)
    const intervalRef=useRef<number | undefined>(undefined)
    const StopTimer =()=>{
        if(intervalRef.current) window.clearInterval(intervalRef.current)
    }
    useEffect(()=>{
        if(intervalRef.current){

        }
        intervalRef.current = window.setInterval(()=>{
            setTimer((timer)=>timer + 1)
        },1000)
        return ()=>{
            StopTimer()
        }
    },[])
  return (
    <div>
        {timer}
        <button onClick={()=>StopTimer()}>Clear</button>
    </div>
  )
}

export default MutableRef