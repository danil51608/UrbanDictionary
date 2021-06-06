import React, { useState, useEffect } from 'react';
import SearchItem from '../searchItem/searchItem';
import WordCard from '../wordCard/wordCard'
//import { makeSearch } from '../../functions'
import './search.css'

export default function  Search(){

    const [searchItem, setSearchItem] = useState('')
    const [searchItemList, setSearchItemList] = useState([])
    const [showCard, setShowCard] = useState(false)
    const [cardItem, setCardItem] = useState()
    useEffect(() => makeSearch(searchItem), [searchItem])
    
    const handleTermClick = item => {
        setCardItem(item)
        // setShowCard(true)  
        console.log(item) 
    }

    return (
        <div className='searchWrapper'>
            <div className='searchInputWrapper'>
                <input className='searchBar' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder='Search for a term...'/>
                <button className='searchBtn'>Search</button>
            </div>
            {searchItemList.length ? searchItemList.map((item, index)=>{
                return <SearchItem item={item} key={index} handleTermClick={handleTermClick}/>
            }): null}
            {cardItem ? <WordCard item={cardItem} setCardItem={setCardItem}/> : null}
        </div>

    )
    
    function makeSearch(term) {
        if(term.trim()){
            fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "262d6dcb81mshfe8fc08e9611eaep1a05e6jsn3fe69bc882d0",
                    "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setSearchItemList(data.list)
                console.log(data.list);
            })
            .catch(err => {
                console.error(err);
            });
        }
    }

}
