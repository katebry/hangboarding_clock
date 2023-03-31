import { useEffect, useState } from "react";

const Timer = () => {
    const initialTimerValue = 30;

    let [startTimer, setStartTimer] = useState(false);
    let [timer, setTimer] = useState(initialTimerValue);

    useEffect(() => {
        let hangTimer: NodeJS.Timer;
        if (startTimer) {
            hangTimer = setInterval(refreshTimer, 1000)
        }
            return () => {
                clearInterval(hangTimer)
            }
    }, [startTimer]);

    const refreshTimer = () => {
        if (timer === -1) {
            alert("You've finished your set!")
        } else {
            setTimer(timer--);
        }
    }
    
    return (
        <>
        <div>{timer}</div>
        <button onClick={e => setStartTimer(true)}>Click</button>
        </>
    )
}

export default Timer;