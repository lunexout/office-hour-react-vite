import React from 'react'
import waverio from '../../../assets/partners/waverio.svg'

import './separator.css'

export const Separator = () => {
  return (
    <div className='separator'>
      <div className='separator-layout'>
        {new Array(5).fill(null).map((el, i) => {
          return <img src={waverio} key={i} />
        })}
      </div>
    </div>
  )
}
