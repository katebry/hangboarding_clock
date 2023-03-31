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
        <div>{date.toLocaleTimeString('en-UK')}</div>
    )
}

export default Clock;