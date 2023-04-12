import React, { useState } from 'react'

export default function Item({ icon,id, title, score, color ,  setCards }) {
  const click = () => {
    setCards(prev =>{
      return prev.map(card =>{
        if (card.id == id) {
          return {
            ...card,
            score:card.score < 100 ? card.score + 1 : card.score
          }
        }else return card

      })
    })
  }

  return (
    <li className="item shazam"
      onClick={click}
      style={
        {
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
        ${color}`,
          color,
        }
      }
    >

      <div><img src={icon} alt="reaction" width={20} height={20} />
        <p>{title}</p>
      </div>

      <dir ><span>{score}</span>
        <p>/ 100</p>

      </dir>
    </li>
  )
}


