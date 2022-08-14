import NavBar from "./components/NavBar.jsx";
import Counters from "./components/Counters.jsx";
import {useState} from "react";

const App = () => {

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
        <>
            <NavBar totalCountes={state.counters.filter(counter => counter.value > 0).length}/>
            <main className="container my-5">
                <Counters
                    counters={state.counters}
                    onDelete={handleDelete}
                    onReset={handleReset}
                    onIncrease={handleIncrease}
                />
            </main>
        </>
    )
}

export default App;