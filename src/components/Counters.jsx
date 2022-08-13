import Counter from "./Counter.jsx";
import counter from "./Counter.jsx";

const Counters = () => {

    const state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
        ]
    }

    const handleDelete = () => console.log("Handle Delete")
    return (
        <div className="container mt-5">
            {
                state.counters.map(
                    counter => <Counter key={counter.id}
                                        value={counter.value}
                                        onDelete={handleDelete}
                    />
                )
            }
        </div>
    )
}

export default Counters;