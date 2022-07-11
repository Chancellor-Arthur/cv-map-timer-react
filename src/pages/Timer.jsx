import React from 'react';
import '../styles/Timer.css';

const Timer = () => {
    return (
        <div>
            <h1>Таймер</h1>
            <div style={{borderBottom: 'solid 3px yellow'}}></div>
            <div className="timer">
                <div className="timer__items">
                    <div className="timer__item timer__hours">00</div>
                    <div className="timer__item timer__minutes">00</div>
                    <div className="timer__item timer__seconds">00</div>
                </div>
            </div>
            <div style={{borderBottom: 'solid 3px yellow'}}></div>
        </div>
    );
};

export default Timer;