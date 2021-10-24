import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=300x300`} alt='robots' />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card