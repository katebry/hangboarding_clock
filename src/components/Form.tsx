import { useState } from "react";

const Form = () => {
    const [set, setSets] = useState('6');
    const [duration, setDuration] = useState('30');

    return (
        <form>
        <label htmlFor="sets">Number of sets:</label>
        <input id="sets" name="sets" type="number" defaultValue={set} onChange={e => setSets(e.target.value)}/>
        <label htmlFor="duration">Duration:</label>
        <input id="duration" name="duration" type="number" defaultValue={duration} onChange={e => setDuration(e.target.value)}/>
        <button type="submit">Submit</button>
        </form>
    )
}

export default Form;