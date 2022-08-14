import Counter from "./Counter.jsx";
import {useState} from "react";

const Counters = () => {

    const [state, setState] = useState({
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
        ]
    })

    const handleDelete = (counterId) => {
        const counters = state.counters.filter(counter => counter.id !== counterId)
        setState({counters})
    }
    return (
        <div className="container mt-5">
            {
                state.counters.map(
                    counter => <Counter key={counter.id}
                                        counter={counter}
                                        onDelete={handleDelete}
                    />
                )
            }
        </div>
    )
}

export default Counters;