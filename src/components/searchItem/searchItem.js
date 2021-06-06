import React from 'react';
import './searchItem.css'

export default function SearchItem({item, handleTermClick}){
    return (
        <div className='searchItemWrapper' onClick={()=>handleTermClick(item)}>
            <p>{item.definition.replace(/\[/g, '').replace(/\]/g, '')}</p>
        </div>
    )
}