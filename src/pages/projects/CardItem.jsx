import React from 'react';
import "./CardHolder.css"

const CardItem = (props) => {
    const { cardDetails } = props;
    const { name, position, date, description, className } = cardDetails;

    return (
        <li className={`${className} card-item`}>
            <div className="card-header">
                <h3 className="card-name">{name} · 1st</h3>
                <p className="card-position">{position}</p>
                <span className="card-date">{date}</span>
            </div>
            <div className="card-body">
                <p className="card-description">{description}</p>
            </div>
        </li>
    );
};

export default CardItem;
