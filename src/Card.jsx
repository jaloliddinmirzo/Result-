import shazam from './assets/shazam.svg'
import chat from './assets/chat.svg'
import brain from './assets/brain.svg'
import eye from './assets/eye.svg'
import React, { useState, useEffect } from 'react';



function Card() {
    const [count1, setCount1] = useState(parseInt(localStorage.getItem('count1')) || 0);
    const [count2, setCount2] = useState(parseInt(localStorage.getItem('count2')) || 0);
    const [count3, setCount3] = useState(parseInt(localStorage.getItem('count3')) || 0);
    const [count4, setCount4] = useState(parseInt(localStorage.getItem('count4')) || 0);
    let [count5, setCount5] =   useState(parseInt(localStorage.getItem('count5')) || 0);

    function handleClick1() {
        setCount1(count1 + 1);
        localStorage.setItem('list', JSON.stringify(count1))
    }

    function handleClick2() {
        setCount2(count2 + 1);
        localStorage.setItem('list', JSON.stringify(count2))
    }

    function handleClick3() {
        setCount3(count3 + 1);
        localStorage.setItem('list', JSON.stringify(count3))

    }

    function handleClick4() {
        setCount4(count4 + 1);
        localStorage.setItem('list', JSON.stringify(count4))

    }
    function click() {
        count5 = (count1 + count2 + count3 + count4) / 4
        setCount5(count5);
        localStorage.setItem('list', JSON.stringify(count1))

    }

    useEffect(() => {
        localStorage.setItem('count1', count1);
        localStorage.setItem('count2', count2);
        localStorage.setItem('count3', count3);
        localStorage.setItem('count4', count4);
        localStorage.setItem('count5', count5);
    }, [count1, count2, count3, count4, count5]);
    return (
        <div className='wrapper'>
            <div className="card">
                <h1 className="h1">Your Result</h1>

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
                    <li className="item shazam" onClick={handleClick1}>

                        <div><img src={shazam} alt="reaction" width={20} height={20} />
                            <p>Reaction</p>
                        </div>

                        <dir ><span>{count1}</span>
                            <p>/ 100</p>

                        </dir>
                    </li>
                    <li className="item brain" onClick={handleClick2}>

                        <div><img src={brain} alt="reaction" width={20} height={20} />
                            <p>Memory</p>
                        </div>

                        <dir><span>{count2}</span>
                            <p>/ 100</p>

                        </dir>
                    </li>
                    <li className="item chat" onClick={handleClick3}>

                        <div><img src={chat} alt="reaction" width={20} height={20} />
                            <p>Verbal</p>
                        </div>

                        <dir ><span>{count3}</span>
                            <p>/ 100</p>

                        </dir>
                    </li>
                    <li className="item eye" onClick={handleClick4}>

                        <div><img src={eye} alt="reaction" width={20} height={20} />
                            <p>Visual</p>
                        </div>

                        <dir ><span>{count4}</span>
                            <p>/ 100</p>
                        </dir>
                    </li>
                    <a href='#' onClick={click} className='button'>Continue</a>
                </ul>
            </div>
        </div>
    )

}

export default Card;
