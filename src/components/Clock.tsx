import { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    
    const refreshClock = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const timer = setInterval(refreshClock, 1000);
        return () => {
            clearInterval(timer)
        }
    }, []);

    return (
        <>
        <h1>{date.toLocaleTimeString('en-UK')}</h1>
        </>
    )
}

export default Clock;