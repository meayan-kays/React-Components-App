import React from 'react'
import Address from './Components/Profile/Address'
import FullName from './Components/Profile/FullName'
import ProfilPhoto from './Components/Profile/ProfilPhoto'
import './App.css'

function Apps() {
    return (
        <div className="Apps">
            <ProfilPhoto />
            <FullName />
            <Address />            
        </div>
    )
}

export default Apps
