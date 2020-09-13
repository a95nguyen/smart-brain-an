import React from 'react';
import './imagelink.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className ='f3 dib black'>
                {'This magic brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br-pill shadow-4'>
                <input className='f4 pa2 w-70 center br4' type='text' onChange={onInputChange} />
                <button className ='w-30 grow f4 link ph3 pv2 dib white bg-light-pink br4'
                onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;