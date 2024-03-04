import React from 'react';

const Card = ({ title, color }) => {
    return (
        <div className="card" style={{ backgroundColor: color }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Hi! My name is Nada Mikky. My ID is 800380087. I am studying computer Science at WVU.</p>
            </div>
        </div>
    );
};

export default Card;
