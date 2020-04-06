import React, { useEffect, useState } from 'react';

const InfoCard = (props) => {
    const [infoCard, changeInfoCard] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/infocards/${props.id}`)
              .then(response => response.json())
              .then(data => {
                changeInfoCard(data)
                console.log(data.img_url)
              }).catch(function(err) {
                console.log(err);
              })
    }, [])

    //{infoCard.img_url}
    return (
        <>
            <h1>{infoCard.text}</h1>
            {infoCard.img_url ? <img src="https://i.redd.it/jab5c3kfm8s21.jpg" /> : null}
        </>
    )
}

export default InfoCard;