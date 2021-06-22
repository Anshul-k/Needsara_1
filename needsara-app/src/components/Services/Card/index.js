import React from 'react'
import {CardContainer, ImageContainer, CardH2, CardP} from './CardElements'

const Card = ({image, title, body}) => {
    return (
        <CardContainer >
            <ImageContainer src={image} alt=''/>
            <CardH2>{title}</CardH2>
            <CardP>{body}</CardP>
        </CardContainer>
    )
}

export default Card
