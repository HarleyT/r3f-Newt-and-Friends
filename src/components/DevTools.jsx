import React, { useRef } from 'react'
import { pauseMainLoop, resumeMainLoop, useMainLoop } from '@manapotion/react'


export const DevTools = () => {
    const mainLoopRef = useRef()

    useMainLoop(({ elapsed }) => {
        mainLoopRef.current.textContent = String(Math.round(elapsed * 1000))
    })

  return (
    <div className='dev'>
        MainLoop: <span ref={mainLoopRef} />
    </div>
  )
}

export default DevTools