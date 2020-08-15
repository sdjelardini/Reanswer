import React from 'react';


const Buttom = ({text,icon,href}) => {
    return (
        <div className='button'>
            <a href={`http://${href}`} >{text}</a>
            </div>
    )
}

export default Buttom;