import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';

const InfoBlock = (props) => {
    const [infoCards, changeInfoCards] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/infoblocks/${props.id}`)
              .then(response => response.json())
              .then(data => {
                changeInfoCards(data.infocards)
              }).catch(function(err) {
                console.log(err);
              })
    }, [])

    // console.log(infoCards)

    return (
        <>
            <h1>{props.name}</h1>
            {infoCards.map(infocard => <InfoCard key={infocard} id={infocard.id} />)}
        </>
    )
}

export default InfoBlock;