import React from 'react'
import {BallTriangle} from 'react-loader-spinner'
 const Loading = () => {
  return (
    <div className='flex justify-center items-center  h-screen'>
        <BallTriangle
        heigth={550}
        width={80}
        color="blue"
        ariaLabel="loading-indicator"
        />
        
    </div>
  )
}
export default Loading;