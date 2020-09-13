import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end', color: 'white', padding: '15px'}}>
                <p 
                onClick={() => onRouteChange('signout')}
                className="f5 grow pointer no-underline br-pill ph3 pv2 mb2 dib white bg-gray" href="#0">Sign Out</p>
            </nav>
        );
        } else {
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end', color: 'white', padding: '15px'}}>
                        <p onClick={() => onRouteChange('signin')} className="f5 grow pointer no-underline br-pill ph3 pv2 mb2 dib white bg-gray" href="#0">Sign In</p>
                        &nbsp;&nbsp;
                        <p onClick={() => onRouteChange('register')} className="f5 grow pointer no-underline br-pill ph3 pv2 mb2 dib white bg-gray" href="#0">Register</p>
                </nav>
            );
        }
}

export default Navigation;