import React from 'react';
import './wordCard.css'
export default function WordCard({item, setCardItem}){
    return (
        <div className='cardWrapper'>
            <h1>{item.word}</h1>
            {item.definition.split('\n').map((item, index) =>{
                    return <p key={index}>{item.replace(/\[/g, '').replace(/\]/g, '')}</p> 
                })}
            <h2>Examples:</h2>
            <div className='examplesWrapper'>
                {item.example.split('\n').map((item, index) =>{
                    return <p key={index}>{item.replace(/\[/g, '').replace(/\]/g, '')}</p> 
                })}

            </div>


            <div className="close-container" onClick={() => {setCardItem()}}>
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <label className="close">close</label>
            </div>

        </div>
    )
}