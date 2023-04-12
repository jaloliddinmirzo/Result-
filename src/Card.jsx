import shazam from './assets/shazam.svg'
import chat from './assets/chat.svg'
import brain from './assets/brain.svg'
import eye from './assets/eye.svg'
import React, { useState, useEffect } from 'react';
import Item from './item';

const cards = [

]

function Card() {
    const [cards, setCards] = useState([
        {
            id: 0,
            color: "#FF5555",
            title: "Reaction",
            score: parseInt(localStorage.getItem('count0')) || 0,
            icon: shazam
        },
        {
            id: 1,
            color: "#FFB21E",
            title: "Memory",
            score: parseInt(localStorage.getItem('count1')) || 0,
            icon: brain
        },
        {
            id: 2,
            color: "#00BB8F",
            title: "Verbal",
            score: parseInt(localStorage.getItem('count2')) || 0,
            icon: chat
        },
        {
            id: 3,
            color: "#1125D6",
            title: "Visual",
            score: parseInt(localStorage.getItem('count3')) || 0,
            icon: eye,
        },
    ])

    let [count5, setCount5] = useState(parseInt(localStorage.getItem('count5')) || 0);


    function click() {
        let a = 0
        cards.forEach((card, i) => {
            localStorage.setItem(`count${i}`, card.score)
            a += card.score
        })
        localStorage.setItem("count5", JSON.stringify(a / 4));
        setCount5(a / 4)
    }
    return (
        <div className='wrapper'>
            <div className="card">
                <h1 className="h1" >Your Result</h1>

                <div className="oval">
                    <h1 className="number">{Math.floor(count5)}
                    </h1> <span>of 100</span>
                </div>

                <h1 className="title">Great</h1>
                <p className="text">Your performance exceed 65% of the people conducting the test here!</p>
            </div>
            <div className="info">
                <h1>Summary</h1>
                <ul className="list">
                    {cards.map(card =>
                        <Item
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            color={card.color}
                            icon={card.icon}
                            score={card.score}
                            setCards={setCards}
                        ></Item>)}


                    <a href='#' onClick={click} className='button'>Continue</a>
                </ul>
            </div>
        </div>
    )

}

export default Card;
