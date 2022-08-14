import Counter from "./Counter.jsx";
import {useState} from "react";
import counter from "./Counter.jsx";

const Counters = () => {

    const [state, setState] = useState({
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
        ]
    })

    const handleReset = () => {
        const counters = state.counters.map(counter => counter = {
            id: counter.id,
            value: 0
        })
        setState({counters})

    }

    const handleIncrease = (counter) => {
        const counters = [...state.counters]
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        setState({counters})
    }

    const handleDelete = (counterId) => {
        const counters = state.counters.filter(counter => counter.id !== counterId)
        setState({counters})
    }
    return (
        <div className="container mt-5">
            <button className="btn btn-primary mb-3" onClick={handleReset}>Reset</button>
            {
                state.counters.map(
                    counter => <Counter key={counter.id}
                                        counter={counter}
                                        onDelete={handleDelete}
                                        onIncrease={handleIncrease}
                    />
                )
            }
        </div>
    )
}

export default Counters;