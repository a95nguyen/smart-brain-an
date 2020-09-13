import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './logo.css'

const Logo = () => {
    return (
        <div className='ma4 ml5 mt0'>
            <Tilt className="Tilt br-pill shadow-2" options={{ max : 65 }} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '7px'}} alt ='brain logo' src={brain}/> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;