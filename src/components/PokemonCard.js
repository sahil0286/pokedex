import React from 'react'

const PokemonCard = ({id, image, name, type }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>Card No : {id}</small></div>
            <img className='imghover' src={image} alt={name} />
            <div className="detail-wrapper">
                <h3 className='text-hover'>{name}</h3>
                <small>Type : {type}</small>
            </div>
        </div>
    )
}

export default PokemonCard