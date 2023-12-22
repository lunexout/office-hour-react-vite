import React from 'react'
import radialGradient from '../../../assets/common/radial-gradient.svg'
import arrow from '../../../assets/common/arrow.svg'
import hand from '../../../assets/common/hand.svg'
import './index.css'

export const MainLayout = () => {
  return (
    <div className='main-layout'>
      <div className='main-layout-banner'>
        <div className='main-layout-radial-gradient'>
          <img className='radial-gradient' src={radialGradient} />
        </div>
        <div className='main-layout-text-banner'>
          <p className='main-layout-text'>
            Live And
            <br /> on-demand
            <br /> trading
          </p>
          <p className='main-layout-sub-text'>
            Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia
            et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
            voluptas.
          </p>
          <div className='main-layout-actions'>
            <button className='main-layout-action-btn'>Explore now</button>
            <div className='main-layout-action-numbers'>
              <i className='fa-solid fa-arrow-left-long'></i>
              <p style={{ fontSize: 28, color: 'white' }}>
                01 - <span style={{ color: '#767799' }}>03</span>
              </p>
              <i className='fa-solid fa-arrow-right-long'></i>
            </div>
          </div>
        </div>
        <div className='main-layout-arrow'>
          <img src={arrow} />
        </div>
        <div style={{ display: 'flex', alignItems: 'end' }}>
          <img className='hand' src={hand} />
        </div>
      </div>
    </div>
  )
}
