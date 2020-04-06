import React, { useEffect, useState } from 'react';
import InfoBlock from '../components/bodyComponents/InfoBlock';

const Body = () => {
    const [info, changeInfo] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/infoblocks`)
              .then(response => response.json())
              .then(data => {
                changeInfo(data)
              }).catch(function(err) {
                console.log(err);
              })
    }, [])

    return (
        <>
            {info.map(infoblock => <InfoBlock key={infoblock.id} {...infoblock} />)}
        </>
    )
}

export default Body;