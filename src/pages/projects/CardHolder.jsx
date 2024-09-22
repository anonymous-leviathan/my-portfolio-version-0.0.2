import React from "react";
import "./CardHolder.css";
import CardItem from "./CardItem";

const cardsList = [
    {
        id: 1,
        name: 'Yasendra Darshana',
        position: 'Senior Manager - Academic Affairs | Institute of Software Engineering',
        date: 'May 1, 2024, Yasendra was Maneesha’s mentor',
        description:
            'I had the pleasure of getting to know Mr. Maneesha during his time as a student at the IJSE. He possesses excellent skills in the field of software engineering and demonstrates a positive attitude towards his work. Maneesha is friendly and easy to work with. I highly recommend him for any software engineering position.',
        className: 'card-1',
    },
    {
        id: 2,
        name: 'Imasha de Silva',
        position: 'Senior QA Engineer | Oracle Cloud HCM',
        date: 'April 29, 2024, Imasha was Maneesha’s mentor',
        description:'Highly recommend Maneesha as a talented developer for any software development role. He incredibly dedicated in his work. He always demonstrated a strong aptitude for learning new technologies and always maintains code quality as well. His excitement about problem-solving and willingness to work together make his a valuable addition to any team.',
        className: 'card-2',
    }
];

function CardHolder() {
    return (
        <div className="cards-app-container">
            <div className="cards-list-container">
                <ul className="cards-list">
                    {cardsList.map((eachCard) => (
                        <CardItem cardDetails={eachCard} key={eachCard.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CardHolder;
