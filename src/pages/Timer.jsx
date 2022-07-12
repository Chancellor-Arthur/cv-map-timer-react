import React, {useContext, useEffect, useRef} from 'react';
import '../styles/Timer.css';
import {TimeContext} from "../context";

const Timer = () => {

    const {timer} = useContext(TimeContext);
    const $hours = useRef();
    const $minutes = useRef();
    const $seconds = useRef();

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    useEffect(() => {
        const hours = Math.floor(timer / 60 / 60);
        const minutes = Math.floor(timer / 60) % 60;
        const seconds = timer % 60;

        $hours.current.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.current.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.current.textContent = seconds < 10 ? '0' + seconds : seconds;

        $hours.current.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.current.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.current.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }, [timer]);

    return (
        <div>
            <h1>Таймер</h1>
            <div style={{borderBottom: 'solid 3px yellow'}}></div>
            <div className="timer">
                <div className="timer__items">
                    <div ref={$hours} className="timer__item timer__hours">00</div>
                    <div ref={$minutes} className="timer__item timer__minutes">00</div>
                    <div ref={$seconds} className="timer__item timer__seconds">00</div>
                </div>
            </div>
            <div style={{borderBottom: 'solid 3px yellow'}}></div>
            <br/>
        </div>
    );
};

export default Timer;