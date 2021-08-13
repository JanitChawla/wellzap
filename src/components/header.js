import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <>
        <div style={{display: 'flex', margin: "10px 10px"}}>
        <Icon style={{marginTop: '10px'}} icon="radix-icons:cross-2" />
        <div className="header">
          Create Workouts
        </div>
      </div>
      <div style={{display: 'flex', margin: "60px 10px"}}>
      <span className="circle-g">1</span><hr/>
      <span className="circle-y">2</span><hr/><span className="circle-b">3</span>
      </div>
      </>
    )
}

export default Header;